import gql from 'graphql-tag'

export typeDefs = gql`
  query {
    currentGame @client {
      teamAScore
      teamBScore
      teamAName
      teamBName
    }
  }
`
