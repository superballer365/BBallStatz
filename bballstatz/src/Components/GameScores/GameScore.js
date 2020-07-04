import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import styles from "./GameScore.module.css";
import logo from "../../Images/Hawks.png";

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
  } = props.data;

  return (
    <div className={styles.container}>
      <div className={styles.teamScoreContainer}>
        <img className={styles.teamLogo} src={logo} />
        <span className={styles.team}>{`${homeTeam.name}:`}</span>
        <span className={styles.teamScore}>{`${homeScore}`}</span>
      </div>
      <div className={styles.teamScoreContainer}>
        <img className={styles.teamLogo} src={logo} />
        <span className={styles.team}>{`${awayTeam.name}:`}</span>
        <span className={styles.teamScore}>{`${awayScore}`}</span>
      </div>
    </div>
  );
}

export default GameScore;
