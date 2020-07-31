import React, { useEffect, useState, useMemo } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import GameScore from "./GameScore";
import * as customQueries from "../../graphql/customQueries";
import DatePicker from "../Common/DatePicker/DatePicker";
import Loader from "react-loader-spinner";
import styles from "./GameScores.module.css";
import {
  getUTCNoonDate,
  formatDate,
  isValidDate,
  UTCNoonDateFromFormat
} from "../../Utils/Date";
import { useHistory } from "react-router-dom";

function GameScores(props) {
  let history = useHistory();
  const dateString = useMemo(() => {
    const newDateString = props.match.params.date
      ? props.match.params.date
      : formatDate(getUTCNoonDate(new Date()));
    return newDateString;
  }, [props.match.params.date]);
  const [gameScores, setGameScores] = useState([]);
  const [isLoadingGameScores, setIsLoadingGameScores] = useState(false);

  useEffect(() => {
    const fetchGameScores = async () => {
      const gameScores = await API.graphql(
        graphqlOperation(queries.getGameScores, {
          date: dateString
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
  }, [dateString]);

  return (
    <div className={styles.container}>
      <h1>Game Scores</h1>
      <DatePicker
        onBackwardClick={() => {
          const newDate = new Date(dateString);
          newDate.setDate(newDate.getDate() - 1);
          history.push(`/GameScores/${formatDate(newDate)}`);
        }}
        onForwardClick={() => {
          const newDate = new Date(dateString);
          newDate.setDate(newDate.getDate() + 1);
          history.push(`/GameScores/${formatDate(newDate)}`);
        }}
        onDateChange={newDate => {
          history.push(`/GameScores/${formatDate(newDate)}`);
        }}
        date={UTCNoonDateFromFormat(dateString)}
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
