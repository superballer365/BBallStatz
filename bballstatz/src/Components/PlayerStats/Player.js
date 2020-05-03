import React, { useEffect, useState } from "react";
import "./Player.css";
import BlankPlayer from "../../Images/BlankPlayer.png";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function round(num) {
  return Math.round(num * 10) / 10;
}

function Player(props) {
  const [player, setPlayer] = useState(undefined);
  const [stats, setStats] = useState(undefined);
  const [loadingStats, setLoadingStats] = useState(true);
  const { players } = props;

  useEffect(() => {
    const fetchPlayerStats = async () => {
      setLoadingStats(true);
      const playerStats = await API.graphql(
        graphqlOperation(queries.getPlayer, { id: player.id })
      );
      console.log("response");
      console.log(playerStats);
      setStats(playerStats.data.getPlayer.perGameStats);
      setLoadingStats(false);
    };

    if (player && player.id) {
      console.log("selected player");
      console.log(player);
      fetchPlayerStats();
    }
  }, [player]);

  return (
    <div className="container">
      <img
        className={player ? "playerImage" : "blankPlayerImage"}
        src={
          player
            ? `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
            : BlankPlayer
        }
      />
      <Autocomplete
        options={players}
        getOptionLabel={player => `${player.firstName} ${player.lastName}`}
        renderInput={params => (
          <TextField
            {...params}
            label={player ? "selected player" : "select a player..."}
            margin="normal"
          />
        )}
        blurOnSelect
        onInputChange={(event, newInputValue) => {
          setPlayer(
            players.find(
              player =>
                `${player.firstName} ${player.lastName}` === newInputValue
            )
          );
        }}
      />
      {loadingStats && player ? (
        <div>...Loading player stats</div>
      ) : (
        stats && (
          <>
            <p>points: {round(stats.points)}</p>
            <p>rebounds: {round(stats.rebounds)}</p>
            <p>assists: {round(stats.assists)}</p>
          </>
        )
      )}
    </div>
  );
}

export default Player;
