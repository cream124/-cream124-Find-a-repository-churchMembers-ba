const {gql} = require('apollo-server');


module.exports = gql`

type Mutation {  
  loadRootPerson(id: String!): Person
}

`;