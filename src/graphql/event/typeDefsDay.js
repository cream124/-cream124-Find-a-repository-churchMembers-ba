const {gql} = require('apollo-server');


module.exports = gql`

type Day {
  _id: String!
  executionDay: String
  date: String
  services: [Service]
  image: String
  order: Int
  state: String
  eventId: String
}


type Query {
  days: [Day]
  getDays(eventId: String): [Day]
  getDay(id: String): Day
}



type Mutation {
    # createEvent(title: String, type: String, image: String, order: Int, state: String): Event
    createDay(executionDay: String, date: String, image: String, order: Int, state: String, eventId: String): Day
    deleteDay(id: String!): Day
    updateDay(id: String, executionDay: String, date: String, image: String, order: Int, state: String, eventId: String): Day
    # addService(name: String, subtitle: String, time: String, order: Int, state: String): Service
    # addDescription(title: String, image: String, detail: String, detail_two: String): Description
  }

`;