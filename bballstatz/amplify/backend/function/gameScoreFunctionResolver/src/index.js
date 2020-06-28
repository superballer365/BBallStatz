const dummyGame = {
  id: "62843",
  date: "2019-06-07T00:00:00.000Z",
  homeTeam: {
    id: "10",
    abbreviation: "GSW",
    city: "Golden State",
    conference: "West",
    division: "Pacific",
    name: "Warriors",
    fullName: "Golden State Warriors"
  },
  awayTeam: {
    id: "28",
    abbreviation: "TOR",
    city: "Toronto",
    conference: "East",
    division: "Atlantic",
    name: "Raptors",
    fullName: "Toronto Raptors"
  },
  homeScore: 92,
  awayScore: 105,
  period: 4,
  isOver: true,
  postSeason: true
};

const getGameScoresHandler = async ctx => {
  console.log("context:");
  console.log(ctx);
  return [dummyGame];
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
