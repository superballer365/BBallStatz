import React, { useEffect, useState } from "react";
import "./Player.css";
import BlankPlayer from "../../Images/BlankPlayer.png";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../../graphql/queries";

function round(num) {
  return Math.round(num * 10) / 10;
}

function Player(props) {
  const [stats, setStats] = useState(undefined);
  const [loadingStats, setLoadingStats] = useState(true);
  const { firstName, lastName, id } = props;

  useEffect(() => {
    const fetchPlayerStats = async () => {
      setLoadingStats(true);
      const player = await API.graphql(
        graphqlOperation(queries.getPlayer, { id: id })
      );
      console.log("Player:");
      console.log(player);
      setLoadingStats(false);
      setStats(player.data.getPlayer.perGameStats);
    };
    fetchPlayerStats();
  }, [id]);

  return (
    <div className="container">
      <img
        className="playerImage"
        src={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`}
      />
      <p>{`${firstName} ${lastName}`}</p>
      {loadingStats || !stats ? (
        <div>...Loading player stats</div>
      ) : (
        <>
          <p>points: {round(stats.points)}</p>
          <p>rebounds: {round(stats.rebounds)}</p>
          <p>assists: {round(stats.assists)}</p>
        </>
      )}
    </div>
  );
}

export default Player;
