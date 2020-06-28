/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGameScores = /* GraphQL */ `
  query GetGameScores($date: String!) {
    getGameScores(date: $date) {
      id
      date
      homeTeam {
        id
        abbreviation
        city
        conference
        division
        name
        fullName
      }
      awayTeam {
        id
        abbreviation
        city
        conference
        division
        name
        fullName
      }
      homeScore
      awayScore
      period
      isOver
      postSeason
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      firstName
      lastName
      perGameStats {
        points
        rebounds
        assists
      }
      mat
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        perGameStats {
          points
          rebounds
          assists
        }
        mat
      }
      nextToken
    }
  }
`;
