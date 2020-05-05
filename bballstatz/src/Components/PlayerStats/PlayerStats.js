import React, { useEffect, useState } from "react";
import "./PlayerStats.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Player from "./Player";
import Button from "@material-ui/core/Button";

function PlayerStats() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([{ undefined }]);
  const [loadingPlayers, setLoadingPlayers] = useState(false);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoadingPlayers(true);
      const players = await API.graphql(
        graphqlOperation(customQueries.listPlayersNamesAndIds, {
          limit: 1000
        })
      );
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
        selectedPlayers.map((player, index) => (
          <Player key={index} players={players} />
        ))
      )}
      {/*<Button variant="contained" color="primary">
        Add Player
        </Button>*/}
    </div>
  );
}

export default PlayerStats;
