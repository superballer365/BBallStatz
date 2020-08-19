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
export const getBoxScore = /* GraphQL */ `
  query GetBoxScore($gameId: String!) {
    getBoxScore(gameId: $gameId) {
      gameScore {
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
      homePlayerStatlines {
        id
        minutes
        firstName
        lastName
        assists
        blocks
        points
        rebounds
        steals
        turnovers
        threesAttempted
        threesMade
        threePercentage
        fieldGoalsAttempted
        fieldGoalsMade
        fieldGoalPercentage
        freethrowsAttempted
        freethrowsMade
        freethrowPercentage
        fouls
      }
      awayPlayerStatlines {
        id
        minutes
        firstName
        lastName
        assists
        blocks
        points
        rebounds
        steals
        turnovers
        threesAttempted
        threesMade
        threePercentage
        fieldGoalsAttempted
        fieldGoalsMade
        fieldGoalPercentage
        freethrowsAttempted
        freethrowsMade
        freethrowPercentage
        fouls
      }
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
