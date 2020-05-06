import React, { useEffect, useState } from "react";
import "./PlayerStats.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Player from "./Player";
import Button from "@material-ui/core/Button";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function PlayerStats() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([{ id: uuidv4() }]);
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

  const onAddPlayer = () => {
    setSelectedPlayers(selectedPlayers.concat({ id: uuidv4() }));
  };

  const onRemovePlayerClick = listId => {
    console.log(`removing playerz ${listId}`);
    setSelectedPlayers(selectedPlayers.filter(player => player.id !== listId));
  };

  return (
    <div className="container">
      <h1>Player Stats!!!</h1>
      {loadingPlayers ? (
        <div>...Loading</div>
      ) : (
        <div className="players">
          {selectedPlayers.map(player => (
            <Player
              key={player.id}
              listId={player.id}
              onRemovePlayer={onRemovePlayerClick}
              players={players.sort((playerA, playerB) =>
                playerA.firstName > playerB.firstName ? 1 : -1
              )}
            />
          ))}
        </div>
      )}
      <Button variant="contained" color="primary" onClick={onAddPlayer}>
        Add Player
      </Button>
    </div>
  );
}

export default PlayerStats;
