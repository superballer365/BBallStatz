import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import DatePicker from "react-datepicker";
import * as queries from "../../graphql/queries";
import GameScore from "./GameScore";
import * as customQueries from "../../graphql/customQueries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import "./GameScores.css";

function GameScores() {
  const [date, setDate] = useState(new Date());
  const [gameScores, setGameScores] = useState([]);
  const [isLoadingGameScores, setIsLoadingGameScores] = useState(false);

  useEffect(() => {
    const fetchGameScores = async () => {
      setIsLoadingGameScores(true);
      const gameScores = await API.graphql(
        graphqlOperation(queries.getGameScores, {
          date: date.toISOString()
        })
      );

      setGameScores(gameScores.data.getGameScores);
      setIsLoadingGameScores(false);
    };

    fetchGameScores();
  }, [date]);

  console.log(gameScores);
  return (
    <div className="container">
      <h1>Game Scores</h1>
      <div className="datePickerContainer">
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={date}
          onChange={date => setDate(date)}
        />
      </div>
      {isLoadingGameScores ? (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : gameScores.length > 0 ? (
        <div className="gameScoresContainer">
          {gameScores.map(gameScore => (
            <GameScore
              key={gameScore.id}
              date={gameScore.date}
              homeTeam={gameScore.homeTeam}
              awayTeam={gameScore.awayTeam}
              homeScore={gameScore.homeScore}
              awayScore={gameScore.awayScore}
              period={gameScore.period}
              isOver={gameScore.isOver}
              postSeason={gameScore.postSeason}
            />
          ))}
        </div>
      ) : (
        <div>No games scheduled.</div>
      )}
    </div>
  );
}

export default GameScores;
