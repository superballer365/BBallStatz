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
      <div className={styles.teamScore}>
        <img className={styles.teamLogo} src={logo} />
        <span>{`${homeTeam.abbreviation}: ${homeScore}`}</span>
      </div>
      <div className={styles.teamScore}>
        <img className={styles.teamLogo} src={logo} />
        <span>{`${awayTeam.abbreviation}: ${awayScore}`}</span>
      </div>
    </div>
  );
}

export default GameScore;
