import React, { useEffect, useCallback, useReducer } from "react";
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
  const [state, dispatch] = useReducer(boxScoreReducer, {
    boxScoreData: undefined,
    activeTeam: undefined,
    isLoadingBoxScore: true,
    error: false
  });
  const { boxScoreData, activeTeam, isLoadingBoxScore, error } = state;

  useEffect(() => {
    const fetchBoxScore = async () => {
      const boxScore = await API.graphql(
        graphqlOperation(queries.getBoxScore, {
          gameId: gameId
        })
      );

      return boxScore.data.getBoxScore;
    };

    dispatch({ type: "setLoading" });
    fetchBoxScore()
      .then(result => {
        dispatch({ type: "setBoxScoreData", payload: result });
      })
      .catch(error => {
        dispatch({ type: "setError" });
        console.error(error);
      });
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

  const getContent = () => {
    if (isLoadingBoxScore) {
      return (
        <Loading marginTop={100} size="medium" message="Loading box score..." />
      );
    }

    if (!boxScoreData) {
      return <div>No box score data available for this game</div>;
    }

    if (error) {
      return <div>Failed to load box score data</div>;
    }

    return (
      <>
        <BoxScoreHeader data={boxScoreData.gameScore} />
        <div className={styles.teamSelector}>
          <ToggleButtonGroup
            value={activeTeam}
            exclusive
            onChange={(event, newActiveTeam) => {
              dispatch({ type: "setActiveTeam", payload: newActiveTeam });
            }}
          >
            <ToggleButton value={boxScoreData.gameScore.homeTeam.abbreviation}>
              {boxScoreData.gameScore.homeTeam.abbreviation}
            </ToggleButton>
            <ToggleButton value={boxScoreData.gameScore.awayTeam.abbreviation}>
              {boxScoreData.gameScore.awayTeam.abbreviation}
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={styles.tableContainer}>
          <BoxScoreTable data={getTableData()} />
        </div>
      </>
    );
  };

  return <div className={styles.container}>{getContent()}</div>;
}

const boxScoreReducer = (state, action) => {
  switch (action.type) {
    case "setLoading":
      return { ...state, isLoadingBoxScore: true };
    case "setBoxScoreData":
      return {
        ...state,
        isLoadingBoxScore: false,
        error: false,
        boxScoreData: action.payload,
        activeTeam: action.payload.gameScore.homeTeam.abbreviation
      };
    case "setActiveTeam":
      return { ...state, activeTeam: action.payload };
    case "setError":
      return {
        ...state,
        error: true,
        data: undefined,
        isLoadingBoxScore: false
      };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export default BoxScore;
