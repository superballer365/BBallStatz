import React, { useEffect, useState, useMemo } from "react";
import styles from "./Player.module.css";
import BlankPlayer from "../../Images/BlankPlayer.png";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import Loader from "react-loader-spinner";

function round(num) {
  return Math.round(num * 10) / 10;
}

function Player(props) {
  const { players, selectedPlayerId, onPlayerChange } = props;
  const isPlayerSelected = selectedPlayerId !== "0";
  const selectedPlayer = useMemo(
    () => players.find(player => player.id === selectedPlayerId),
    [players]
  );
  const [stats, setStats] = useState(undefined);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchPlayerStats = async () => {
      setLoadingStats(true);
      const playerStats = await API.graphql(
        graphqlOperation(queries.getPlayer, { id: selectedPlayerId })
      );
      setStats({
        ...playerStats.data.getPlayer.perGameStats,
        mat: playerStats.data.getPlayer.mat
      });
      setLoadingStats(false);
    };

    if (isPlayerSelected) {
      fetchPlayerStats();
    }
  }, [selectedPlayerId, isPlayerSelected]);

  return (
    <div className={styles.container}>
      <div className={styles.playerImageContainer}>
        <Button
          className={styles.removeButton}
          variant="contained"
          color="primary"
          onClick={() => props.onRemovePlayer(props.listId)}
        >
          X
        </Button>
        <img
          className={
            selectedPlayer ? styles.playerImage : styles.blankPlayerImage
          }
          src={
            selectedPlayer
              ? `https://nba-players.herokuapp.com/players/${selectedPlayer.lastName}/${selectedPlayer.firstName}`
              : BlankPlayer
          }
        />
      </div>

      <Autocomplete
        options={players}
        getOptionLabel={selectedPlayer =>
          `${selectedPlayer.firstName} ${selectedPlayer.lastName}`
        }
        defaultValue={selectedPlayer}
        renderInput={params => (
          <TextField
            {...params}
            label={selectedPlayer ? "selected player" : "select a player..."}
            margin="normal"
          />
        )}
        blurOnSelect
        onChange={(event, newInputValue) => {
          newInputValue && onPlayerChange(selectedPlayerId, newInputValue.id);
        }}
      />
      {loadingStats && selectedPlayer ? (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : (
        stats && (
          <>
            <p>
              <span className={styles.stat}>PTS: </span>
              <span className={styles.stat}>{round(stats.points)}</span>
            </p>
            <p>
              <span className={styles.stat}>REB: </span>
              <span className={styles.stat}>{round(stats.rebounds)}</span>
            </p>
            <p>
              <span className={styles.stat}>AST: </span>
              <span className={styles.stat}>{round(stats.assists)}</span>
            </p>
            <p>
              <span className={styles.stat}>MAT: </span>
              <span className={styles.stat}>{round(stats.mat)}</span>
            </p>
          </>
        )
      )}
    </div>
  );
}

export default Player;
