import React, { useEffect, useState } from "react";
import "./Player.css";
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
      console.log("player");
      console.log(player);
      setStats({
        ...playerStats.data.getPlayer.perGameStats,
        mat: playerStats.data.getPlayer.mat
      });
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
      <div className="playerImageContainer">
        <Button
          className="removeButton"
          variant="contained"
          color="primary"
          onClick={() => props.onRemovePlayer(props.listId)}
        >
          X
        </Button>
        <img
          className={player ? "playerImage" : "blankPlayerImage"}
          src={
            player
              ? `https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`
              : BlankPlayer
          }
        />
      </div>

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
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : (
        stats && (
          <>
            <p>
              <span className="stat">PTS: </span>
              <span className="stat">{round(stats.points)}</span>
            </p>
            <p>
              <span className="stat">REB: </span>
              <span className="stat">{round(stats.rebounds)}</span>
            </p>
            <p>
              <span className="stat">AST: </span>
              <span className="stat">{round(stats.assists)}</span>
            </p>
            <p>
              <span className="stat">MAT: </span>
              <span className="stat">{round(stats.mat)}</span>
            </p>
          </>
        )
      )}
    </div>
  );
}

export default Player;
