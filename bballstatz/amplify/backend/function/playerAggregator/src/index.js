const axios = require("axios");
const gql = require("graphql-tag");
const graphql = require("graphql");
const { print } = graphql;

/* Amplify Params - DO NOT EDIT
	API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT
	API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async event => {
  const teamIdToNameDict = await getTeamDict();
  if (!teamIdToNameDict) {
    return {
      statusCode: 500,
      body: JSON.stringify("Failed to acquire team data")
    };
  }
  const players = await getAllPlayers(teamIdToNameDict);
  console.log("players:");
  console.log(players);
  if (!players) {
    return {
      statusCode: 500,
      body: JSON.stringify("Failed to acquire player data")
    };
  }

  await addPlayersToDb(players);

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!")
  };
  return response;
};

const year = new Date().getFullYear() - 1;
const teamIdsToIgnore = [
  "fa69b5b1-3861-47e9-8d6b-366000133ef9",
  "9501f713-da56-4126-9d64-b689a6143200"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTeamDict() {
  let teamIdToNameDict = {};
  try {
    console.log("year:" + year);
    const allGames = await axios({
      url: `http://api.sportradar.us/nba/trial/v5/en/games/${year}/REG/schedule.json?api_key=${process.env.SPORTSRADAR_APIKEY}`,
      method: "get"
    });

    allGames.data.games.forEach(game => {
      teamIdToNameDict[game.home.id] = game.home.name;
    });
    return teamIdToNameDict;
  } catch (error) {
    console.log("failed to get team data with error: " + error);
    return undefined;
  }
}

async function getAllPlayers(teamIdToNameDict) {
  let allPlayers = [];

  try {
    // iterate through all teams
    for (let id in teamIdToNameDict) {
      // sleep as to not exceed limit for number of calls in given time interval
      if (teamIdsToIgnore.find(teamId => teamId === id)) continue;
      await sleep(1100);
      console.log("about to request team: " + id);
      const teamData = await axios({
        url: `http://api.sportradar.us//nba/trial/v5/en/teams/${id}/profile.json?api_key=${process.env.}`,
        method: "get"
      });

      // iterate through all players on each team
      teamData.data.players.forEach(player => {
        allPlayers.push({
          id: player.id,
          firstName: player.first_name,
          lastName: player.last_name
        });
      });
    }

    return allPlayers;
  } catch (error) {
    console.log("failed to get player data with error: " + error);
    return undefined;
  }
}

async function addPlayersToDb(players) {
  const createPlayer = gql`
    mutation AddPlayer($input: CreatePlayerInput!) {
      createPlayer(input: $input) {
        firstName
        id
        lastName
      }
    }
  `;

  console.log(`about to add ${players.length} player to DB`);
  for (const player of players) {
    console.log(`about to add ${player.firstName} ${player.lastName} to DB`);
    await sleep(500);
    const graphqlData = await axios({
      url: process.env.API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIENDPOINTOUTPUT,
      method: "post",
      headers: {
        "x-api-key": process.env.API_BBALLSTATZGRAPHQLAPI_GRAPHQLAPIEKEY
      },
      data: {
        query: print(createPlayer),
        variables: {
          input: {
            ...player
          }
        }
      }
    });
    console.log("result");
    console.log(graphqlData.data.data);
    if (graphqlData.data.errors && graphqlData.data.errors.length > 0) {
      console.log(
        `Failed to insert player ${player.firstName} ${player.lastName} with the following error(s)`
      );
      graphqlData.data.errors.forEach(error =>
        console.log("Error type: " + error.errorType)
      );
    }
  }
}
