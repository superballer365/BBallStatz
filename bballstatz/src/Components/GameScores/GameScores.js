import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import GameScore from "./GameScore";
import * as customQueries from "../../graphql/customQueries";
import DatePicker from "../Common/DatePicker/DatePicker";
import Loader from "react-loader-spinner";
import styles from "./GameScores.module.css";

const getUTCNoonDate = date => {
  date.setUTCFullYear(date.getFullYear());
  date.setUTCMonth(date.getMonth());
  date.setUTCDate(date.getDate());
  date.setUTCHours(12, 0, 0, 0);
  return date;
};

function GameScores() {
  const [date, setDate] = useState(getUTCNoonDate(new Date()));
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
        onBackwardClick={() =>
          setDate(prevDate => {
            prevDate.setDate(prevDate.getDate() - 1);
            return new Date(prevDate);
          })
        }
        onForwardClick={() =>
          setDate(prevDate => {
            prevDate.setDate(prevDate.getDate() + 1);
            return new Date(prevDate);
          })
        }
        onDateChange={date => setDate(getUTCNoonDate(date))}
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
