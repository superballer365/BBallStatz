import React, { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./BoxScore.module.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import Loading from "../Common/Loading/Loading";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BoxScoreTable from "./BoxScoreTable";
import BoxScoreHeader from "./BoxScoreHeader";

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
        setActiveTeam(result.gameScore.homeTeam.abbreviation);
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
      activeTeam === boxScoreData.gameScore.homeTeam.abbreviation
        ? boxScoreData.homePlayerStatlines
        : boxScoreData.awayPlayerStatlines;

    return teamStatlines.map(playerStatline => {
      const { firstName, lastName, id, ...data } = playerStatline;
      return {
        name: `${firstName.charAt(0)}. ${lastName}`,
        playerId: id,
        ...data
      };
    });
  }, [boxScoreData, activeTeam]);

  return (
    <div className={styles.container}>
      {isLoadingBoxScore || !boxScoreData ? (
        <Loading marginTop={100} size="medium" message="Loading box score..." />
      ) : (
        <>
          <BoxScoreHeader data={boxScoreData.gameScore} />
          <div className={styles.teamSelector}>
            <ToggleButtonGroup
              value={activeTeam}
              exclusive
              onChange={(event, newActiveTeam) => {
                setActiveTeam(newActiveTeam);
              }}
            >
              <ToggleButton
                value={boxScoreData.gameScore.homeTeam.abbreviation}
              >
                {boxScoreData.gameScore.homeTeam.abbreviation}
              </ToggleButton>
              <ToggleButton
                value={boxScoreData.gameScore.awayTeam.abbreviation}
              >
                {boxScoreData.gameScore.awayTeam.abbreviation}
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className={styles.tableContainer}>
            <BoxScoreTable data={getTableData()} />
          </div>
        </>
      )}
    </div>
  );
}

export default BoxScore;
