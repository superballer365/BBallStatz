import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import { getTeamLogo } from "../../Utils/Logos";
import styles from "./GameScore.module.css";
import { useHistory } from "react-router-dom";

function TeamScore(props) {
  const { name, score } = props;

  return (
    <div className={styles.teamScoreContainer}>
      <div className={styles.teamLogoContainer}>
        <img className={styles.img} src={getTeamLogo(name)} />
      </div>
      <span className={styles.team}>{`${name}:`}</span>
      <span className={styles.teamScore}>{`${score}`}</span>
    </div>
  );
}

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
    postSeason,
    onScoreClick
  } = props.data;
  const history = useHistory();

  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log("Clicked");
        history.push(`/BoxScore/${id}`);
      }}
    >
      <div className={styles.period}>{isOver ? "Final" : `Q${period}`}</div>
      <TeamScore name={homeTeam.name} score={homeScore} />
      <TeamScore name={awayTeam.name} score={awayScore} />
    </div>
  );
}

export default GameScore;
