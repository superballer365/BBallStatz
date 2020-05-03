import React, { useEffect, useState } from "react";
import "./PlayerStats.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Player from "./Player";

function PlayerStats() {
  const [players, setPlayers] = useState([]);
  const [loadingPlayers, setLoadingPlayers] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoadingPlayers(true);
      const players = await API.graphql(
        graphqlOperation(customQueries.listPlayersNamesAndIds)
      );
      console.log("Players:");
      console.log(players);
      setLoadingPlayers(false);
      setPlayers(players.data.listPlayers.items);
    };
    fetchPlayerData();
  }, []);

  return (
    <div className="container">
      <h1>Player Stats!!!</h1>
      {loadingPlayers ? (
        <div>...Loading</div>
      ) : (
        players.map(player => (
          <Player
            key={player.id}
            name={`${player.firstName} ${player.lastName}`}
            id={player.id}
          />
        ))
      )}
    </div>
  );
}

export default PlayerStats;
