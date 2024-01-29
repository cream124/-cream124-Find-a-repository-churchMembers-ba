// import { gql } from 'apollo-server';
const {gql} = require('apollo-server');

// export const typeDefs = gql`
module.exports = gql`
  type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
  }

  type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!
  }

  type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
  }
`;