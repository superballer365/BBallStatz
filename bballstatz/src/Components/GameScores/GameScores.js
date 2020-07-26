import React, { useEffect, useState, useMemo } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import GameScore from "./GameScore";
import * as customQueries from "../../graphql/customQueries";
import DatePicker from "../Common/DatePicker/DatePicker";
import Loader from "react-loader-spinner";
import styles from "./GameScores.module.css";
import { getUTCNoonDate, formatDate, isValidDate } from "../../Utils/Date";
import { useHistory } from "react-router-dom";

function GameScores(props) {
  let history = useHistory();
  const date = useMemo(() => {
    const defaultDate = getUTCNoonDate(new Date());
    try {
      const newDate = props.match.params.date
        ? new Date(props.match.params.date)
        : getUTCNoonDate(new Date());
      if (!isValidDate(newDate)) throw new Error("Invalid date in URL");
      return newDate;
    } catch (error) {
      console.error(error);
      history.push(`/GameScores/${formatDate(defaultDate)}`);
      return defaultDate;
    }
  }, [props.match.params.date]);
  const [gameScores, setGameScores] = useState([]);
  const [isLoadingGameScores, setIsLoadingGameScores] = useState(false);

  useEffect(() => {
    const fetchGameScores = async () => {
      console.log(`date: ${date.toISOString()}`);
      const gameScores = await API.graphql(
        graphqlOperation(queries.getGameScores, {
          date: date.toISOString()
        })
      );

      return gameScores.data.getGameScores;
    };

    setIsLoadingGameScores(true);
    fetchGameScores()
      .then(result => {
        setGameScores(result);
      })
      .catch(error => {
        setGameScores([]);
        console.error(error);
      })
      .finally(() => setIsLoadingGameScores(false));
  }, [date]);

  return (
    <div className={styles.container}>
      <h1>Game Scores</h1>
      <DatePicker
        onBackwardClick={() => {
          const newDate = new Date(date);
          newDate.setDate(newDate.getDate() - 1);
          history.push(`/GameScores/${formatDate(newDate)}`);
        }}
        onForwardClick={() => {
          const newDate = new Date(date);
          newDate.setDate(newDate.getDate() + 1);
          history.push(`/GameScores/${formatDate(newDate)}`);
        }}
        onDateChange={newDate => (date = newDate)}
        date={date}
      />
      <div className={styles.gameScoresContainer}>
        {isLoadingGameScores ? (
          <Loader
            style={{ marginTop: "50px" }}
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : gameScores.length > 0 ? (
          gameScores.map(gameScore => (
            <GameScore key={gameScore.id} data={gameScore} />
          ))
        ) : (
          <div style={{ marginTop: "50px" }}>No games scheduled.</div>
        )}
      </div>
    </div>
  );
}

export default GameScores;
