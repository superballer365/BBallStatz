const axios = require("axios");

const getPlayerStatlinesForTeam = (teamId, data) => {
  const teamPlayers = data.filter(player => player.team.id === teamId);
  return teamPlayers.map(teamPlayer => ({
    id: teamPlayer.player.id,
    firstName: teamPlayer.player.first_name,
    lastName: teamPlayer.player.last_name,
    minutes: teamPlayer.min,
    assists: teamPlayer.ast,
    blocks: teamPlayer.blk,
    points: teamPlayer.pts,
    rebounds: teamPlayer.reb,
    steals: teamPlayer.stl,
    turnovers: teamPlayer.turnover,
    threesAttempted: teamPlayer.fg3a,
    threesMade: teamPlayer.fg3m,
    threePercentage: teamPlayer.fg3_pct,
    fieldGoalsAttempted: teamPlayer.fga,
    fieldGoalsMade: teamPlayer.fgm,
    fieldGoalPercentage: teamPlayer.fg_pct,
    freethrowsAttempted: teamPlayer.fta,
    freethrowsMade: teamPlayer.ftm,
    freethrowPercentage: teamPlayer.ft_pct,
    fouls: teamPlayer.pf
  }));
};

const getGameScore = (homeTeamId, awayTeamId, data) => {
  const gameData = data[0].game;
  const homeTeam = data.find(player => player.team.id === homeTeamId).team;
  const awayTeam = data.find(player => player.team.id === awayTeamId).team;

  return {
    id: gameData.id,
    date: gameData.date,
    homeTeam: {
      id: homeTeam.id,
      abbreviation: homeTeam.abbreviation,
      city: homeTeam.city,
      conference: homeTeam.conference,
      division: homeTeam.division,
      name: homeTeam.name,
      fullName: homeTeam.full_name
    },
    awayTeam: {
      id: awayTeam.id,
      abbreviation: awayTeam.abbreviation,
      city: awayTeam.city,
      conference: awayTeam.conference,
      division: awayTeam.division,
      name: awayTeam.name,
      fullName: awayTeam.full_name
    },
    homeScore: gameData.home_team_score,
    awayScore: gameData.visitor_team_score,
    period: gameData.period,
    isOver: gameData.status === "Final",
    postSeason: gameData.postseason
  };
};

const getBoxScoreHandler = async ctx => {
  let gameId = ctx.arguments.gameId;
  const url = `https://www.balldontlie.io/api/v1/stats/?game_ids[]=${gameId}`;
  const results = await axios.get(url);

  const homeTeamId = results.data.data[0].game.home_team_id;
  const awayTeamId = results.data.data[0].game.visitor_team_id;

  const homePlayerStatlines = getPlayerStatlinesForTeam(
    homeTeamId,
    results.data.data
  );
  const awayPlayerStatlines = getPlayerStatlinesForTeam(
    awayTeamId,
    results.data.data
  );
  const gameScore = getGameScore(homeTeamId, awayTeamId, results.data.data);

  return {
    gameScore,
    homePlayerStatlines,
    awayPlayerStatlines
  };
};

const resolvers = {
  Query: {
    getBoxScore: getBoxScoreHandler
  }
};

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async event => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};
