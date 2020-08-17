import React, { useEffect, useState } from "react";
import styles from "./PlayerStats.module.css";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import * as customQueries from "../../graphql/customQueries";
import Player from "./Player";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

function PlayerStats(props) {
  const playerIds = props.match.params.playerIds
    ? JSON.parse(props.match.params.playerIds)
    : [];
  console.log(playerIds);
  const [players, setPlayers] = useState(undefined);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const history = useHistory();

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

  const onPlayerChange = (oldPlayerId, newPlayerId) => {
    console.log(`changing from player ${oldPlayerId} to ${newPlayerId}`);
    const index = playerIds.indexOf(oldPlayerId);

    if (index !== -1) {
      playerIds[index] = newPlayerId;
      history.push(`/PlayerStats/${JSON.stringify(playerIds)}`);
    }
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
              onPlayerChange={onPlayerChange}
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
