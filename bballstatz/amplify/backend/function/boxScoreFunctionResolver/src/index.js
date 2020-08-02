const axios = require("axios");

const getBoxScoreHandler = async ctx => {
  let gameId = ctx.arguments.gameId;
  const url = `https://www.balldontlie.io/api/v1/stats/?game_ids[]=${gameId}`;
  const results = await axios.get(url);
  const gameScores = results.data.data.map(playerBoxScore => ({
    id: playerBoxScore.player.id,
    firstName: playerBoxScore.player.first_name,
    lastName: playerBoxScore.player.last_name,
    assists: playerBoxScore.ast,
    blocks: playerBoxScore.blk,
    points: playerBoxScore.pts,
    rebounds: playerBoxScore.reb
  }));
  return gameScores;
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
