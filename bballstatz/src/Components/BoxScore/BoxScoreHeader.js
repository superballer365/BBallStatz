import React, { useEffect, useState, useCallback, useMemo } from "react";
import styles from "./BoxScoreHeader.module.css";
import { getTeamLogo } from "../../Utils/Logos";

function BoxScoreHeader(props) {
  return (
    <div className={styles.container}>
      <div className={styles.teamScoreContainer}>
        <div className={styles.teamLogoContainer}>
          <img
            className={styles.img}
            src={getTeamLogo(props.data.homeTeam.name)}
          />
        </div>
        <div className={styles.teamScore}>
          <p>{props.data.homeScore}</p>
        </div>
      </div>
      <div className={styles.gameStatusContainer}>
        {props.data.isOver ? "Final" : `Q${props.data.period}`}
      </div>
      <div className={styles.teamScoreContainer}>
        <div className={styles.teamScore}>
          <p>{props.data.awayScore}</p>
        </div>
        <div className={styles.teamLogoContainer}>
          <img
            className={styles.img}
            src={getTeamLogo(props.data.awayTeam.name)}
          />
        </div>
      </div>
    </div>
  );
}

export default BoxScoreHeader;
