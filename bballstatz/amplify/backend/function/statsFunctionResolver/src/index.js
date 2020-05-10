const http = require("http");
const axios = require("axios");

function calculatePerGameStats(playerData) {
  let totalGames = 0;
  let totalPoints = 0;
  let totalAssists = 0;
  let totalRebounds = 0;
  // getting stats from most recent season by default
  playerData.seasons[0].teams.forEach(team => {
    totalGames += team.total.games_played;
    totalPoints += team.total.points;
    totalAssists += team.total.assists;
    totalRebounds += team.total.rebounds;
  });

  return {
    points: totalPoints / totalGames,
    rebounds: totalRebounds / totalGames,
    assists: totalAssists / totalGames
  };
}

function getPlayerStatsOLD(playerId) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      `http://api.sportradar.us/nba/trial/v5/en/players/${playerId}/profile.json?api_key=4kfpcdnf83bx43bj9gjucfym`,
      res => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          return reject(new Error("statusCode=" + res.statusCode));
        }

        let perGameStats = undefined;
        let body = [];
        res.on("data", function(chunk) {
          body.push(Buffer.from(chunk));
        });
        res.on("end", function() {
          try {
            const statsData = JSON.parse(Buffer.concat(body).toString());
            perGameStats = calculatePerGameStats(statsData);
          } catch (e) {
            reject(e);
          }
          resolve(perGameStats);
        });
      }
    );
    req.on("error", e => {
      reject(e.message);
    });
    req.end();
  });
}

async function getPlayerStats(playerId) {
  const results = await axios.get(
    `https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerId}`
  );

  const stats = results.data.data[0];

  return {
    points: stats.pts,
    rebounds: stats.reb,
    assists: stats.ast
  };
}

const resolvers = {
  Player: {
    perGameStats: async ctx => {
      return await getPlayerStats(ctx.source.id);
    }
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
