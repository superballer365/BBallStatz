const axios = require("axios");

function formatDate(d) {
  let month = "" + (d.getUTCMonth() + 1),
    day = "" + d.getUTCDate(),
    year = d.getUTCFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const formattedDate = [year, month, day].join("-");
  console.log(`formatted date: ${formattedDate}`);
  return formattedDate;
}

const getGameScoresHandler = async ctx => {
  let date = undefined;
  try {
    date = new Date(ctx.arguments.date);
  } catch (error) {
    throw new Error(
      `Failed to parse supplied date with the following error: ${error.message}`
    );
  }
  const url = `https://www.balldontlie.io/api/v1/games?start_date=${formatDate(
    date
  )}&end_date=${formatDate(date)}`;
  const results = await axios.get(url);
  const gameScores = results.data.data.map(gameScore => ({
    id: gameScore.id,
    date: gameScore.date,
    homeTeam: {
      id: gameScore.home_team.id,
      abbreviation: gameScore.home_team.abbreviation,
      city: gameScore.home_team.city,
      conference: gameScore.home_team.conference,
      division: gameScore.home_team.division,
      name: gameScore.home_team.name,
      fullName: gameScore.home_team.full_name
    },
    awayTeam: {
      id: gameScore.visitor_team.id,
      abbreviation: gameScore.visitor_team.abbreviation,
      city: gameScore.visitor_team.city,
      conference: gameScore.visitor_team.conference,
      division: gameScore.visitor_team.division,
      name: gameScore.visitor_team.name,
      fullName: gameScore.visitor_team.full_name
    },
    homeScore: gameScore.home_team_score,
    awayScore: gameScore.visitor_team_score,
    period: gameScore.period,
    isOver: gameScore.status === "Final",
    postSeason: gameScore.postseason
  }));
  return gameScores;
};

const resolvers = {
  Query: {
    getGameScores: getGameScoresHandler
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
