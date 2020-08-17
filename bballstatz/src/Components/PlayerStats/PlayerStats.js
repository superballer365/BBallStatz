import React, { useEffect, useState } from "react";
import styles from "./PlayerStats.module.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Player from "./Player";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function PlayerStats(props) {
  const playerIds = props.match.params.playerIds
    ? JSON.parse(props.match.params.playerIds)
    : [];
  console.log(playerIds);
  const [players, setPlayers] = useState(undefined);
  const [loadingPlayers, setLoadingPlayers] = useState(true);

  useEffect(() => {
    const fetchPlayerData = async () => {
      setLoadingPlayers(true);
      const players = await API.graphql(
        graphqlOperation(customQueries.listPlayersNamesAndIds, {
          limit: 1000
        })
      );
      setPlayers(players.data.listPlayers.items);
      setLoadingPlayers(false);
    };
    fetchPlayerData();
  }, []);

  const onAddPlayer = () => {
    //setSelectedPlayers(selectedPlayers.concat({ id: uuidv4() }));
  };

  const onRemovePlayerClick = listId => {
    console.log(`removing playerz ${listId}`);
    //setSelectedPlayers(selectedPlayers.filter(player => player.id !== listId));
  };

  return (
    <div className={styles.container}>
      <h1>Player Stats</h1>
      {loadingPlayers ? (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : (
        <div className={styles.players}>
          {playerIds.map(id => (
            <Player
              key={id}
              listId={id}
              selectedPlayerId={id}
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
