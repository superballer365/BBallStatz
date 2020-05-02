import React, { useEffect } from "react";
import "./PlayerStats.css";
// import { API, graphqlOperation } from "aws-amplify";
// import * as queries from "../graphql/queries";

function PlayerStats() {
  // useEffect(() => {
  //   const fetchPlayerData = async () => {
  //     const players = await API.graphql(graphqlOperation(queries.listPlayers));
  //     console.log("Players:");
  //     console.log(players);
  //   };
  //   fetchPlayerData();
  // }, []);

  return (
    <div className="container">
      <h1>Player Stats!!!</h1>
    </div>
  );
}

export default PlayerStats;
