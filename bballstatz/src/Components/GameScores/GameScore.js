import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import styles from "./GameScore.module.css";

function GameScore(props) {
  const {
    id,
    date,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    period,
    isOver,
    postSeason
  } = props;

  return (
    <div className={styles.container}>
      {`${homeTeam.abbreviation}: ${homeScore}    ${awayTeam.abbreviation}: ${awayScore}`}
    </div>
  );
}

export default GameScore;
