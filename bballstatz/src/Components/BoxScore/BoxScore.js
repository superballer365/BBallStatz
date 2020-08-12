import React, { useEffect, useState } from "react";
import styles from "./BoxScore.module.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";

function Statline({ data }) {
  return (
    <div>{`${data.firstName} ${data.lastName} PTS: ${data.points} REB: ${data.rebounds} AST: ${data.assists}`}</div>
  );
}

function BoxScore(props) {
  const gameId = props.match.params.gameId;
  const [boxScoreData, setBoxScoreData] = useState([]);
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
        console.log("box score data");
        console.log(result);
        setBoxScoreData(result);
      })
      .catch(error => {
        setBoxScoreData([]);
        console.error(error);
      })
      .finally(() => setIsLoadingBoxScore(false));
  }, [gameId]);

  return (
    <div className={styles.container}>
      <h1>Box Score</h1>
      <p>{`gameId ${gameId}`}</p>
      <div>
        {isLoadingBoxScore ? (
          <Loader
            style={{ marginTop: "50px" }}
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          boxScoreData.map(playerStateLine => (
            <Statline key={playerStateLine.id} data={playerStateLine} />
          ))
        )}
      </div>
    </div>
  );
}

export default BoxScore;
