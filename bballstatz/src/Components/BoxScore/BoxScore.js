import React, { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./BoxScore.module.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import { useTable } from "react-table";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BoxScoreTable from "./BoxScoreTable";

function BoxScore(props) {
  const gameId = props.match.params.gameId;
  const [activeTeam, setActiveTeam] = useState();
  const [boxScoreData, setBoxScoreData] = useState();
  const [isLoadingBoxScore, setIsLoadingBoxScore] = useState(false);

  useEffect(() => {
    const fetchBoxScore = async () => {
      const boxScore = await API.graphql(
        graphqlOperation(queries.getBoxScore, {
          gameId: gameId
        })
      );

      return boxScore.data.getBoxScore;
    };

    setIsLoadingBoxScore(true);
    fetchBoxScore()
      .then(result => {
        setBoxScoreData(result);
        setActiveTeam(result.gameScore.homeTeam.name);
      })
      .catch(error => {
        setBoxScoreData([]);
        console.error(error);
      })
      .finally(() => setIsLoadingBoxScore(false));
  }, [gameId]);

  const getTableData = useCallback(() => {
    if (!boxScoreData) return [];

    const teamStatlines =
      activeTeam === boxScoreData.gameScore.homeTeam.name
        ? boxScoreData.homePlayerStatlines
        : boxScoreData.awayPlayerStatlines;

    return teamStatlines.map(playerStatline => ({
      name: `${playerStatline.firstName.charAt(0)}. ${playerStatline.lastName}`,
      points: playerStatline.points,
      rebounds: playerStatline.rebounds,
      assists: playerStatline.assists,
      blocks: playerStatline.blocks
    }));
  }, [boxScoreData, activeTeam]);

  return (
    <div className={styles.container}>
      <h1>Box Score</h1>
      <p>{`gameId ${gameId}`}</p>
      <div>
        {isLoadingBoxScore || !boxScoreData ? (
          <Loader
            style={{ marginTop: "50px" }}
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <>
            <ToggleButtonGroup
              value={activeTeam}
              exclusive
              onChange={(event, newActiveTeam) => {
                setActiveTeam(newActiveTeam);
              }}
            >
              <ToggleButton value={boxScoreData.gameScore.homeTeam.name}>
                {boxScoreData.gameScore.homeTeam.name}
              </ToggleButton>
              <ToggleButton value={boxScoreData.gameScore.awayTeam.name}>
                {boxScoreData.gameScore.awayTeam.name}
              </ToggleButton>
            </ToggleButtonGroup>
            <BoxScoreTable data={getTableData()} />
          </>
        )}
      </div>
    </div>
  );
}

export default BoxScore;
