import {gql} from '@apollo/client';


export const FETCH_COMPETITIONS = gql`
query {
  competitions {
    id
    sport {
        id
        name
    }
    shortName
    logoUrl
  }
}
`;


export const FETCH_MATCHES = gql`
    query (
        $competitions : [Int], 
        $teams: [Int], 
        $startDate: DateTime,
        $endDate : DateTime,
    ) { 
      matches (
        competitions : $competitions,
        teams : $teams,
        startDate: $startDate,
        endDate : $endDate
      ) {
            location
            scheduledDateUtc
            competition {
                id
                shortName
                sport {
                    id
                    name
                }
            }
            season {
                name
            }
            homeTeam {
                id
                name
                logoUrl
            }
            awayTeam {
                id
                name
                logoUrl
            }
        }
    }
`;


export const FETCH_SEASONS = gql`
    query {
      seasons {
        id
        name
        competition {
          id
          name
          sport {
            id
            name
          }
        }
      }
    }
`;


export const FETCH_FOOTBALL_STANDINGS = gql`
    query ($season_id : Int!) { 
      footballStandings (season : $season_id) {
        position
        team {
            id
            name
            logoUrl
        }
        points
        played
        won
        drawn
        lost
        goalsFor
        goalsAgainst
        goalDifference
      }
    }
`;
