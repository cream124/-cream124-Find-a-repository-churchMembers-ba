const {gql} = require('apollo-server');


module.exports = gql`

type Service {
  _id: String!
  name: String
  subtitle: String
  time: String
  description2: String
  photo: String
  order: Int
  state: String
  dayId: String
}

type Query {
  services: [Service]
  getService(id: String): Service
}

type Mutation {
  createService(name: String!, subtitle: String, time: String, description2: String, order:Int, state: String, photo: String, dayId: String ): Service
  deleteService(id: String!): Service
  updateService(id: String, name: String!, subtitle: String, time: String, description2: String, order:Int, state: String, photo: String, dayId: String ): Service
}

`;