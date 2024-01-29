const {gql} = require('apollo-server');


module.exports = gql`
type Event {
  _id: String!
  title: String
  type: String
  image: String
  days: [Day]
  order: Int
  state: String
}

type Query {
  events: [Event]
  activeEvents:[Event]
  event(id: String): Event

  eventsF(state:String): [Event]
}

type Mutation {
    createEvent(title: String, type: String, image: String, order: Int, state: String): Event
    deleteEvent(id: String!): Event
    updateEvent( id: String, title: String, type: String, image: String, order: Int, state: String): Event
    # addDay(executionDay: String, date: String, image: String, order: Int, state: String): Day
    # addService(name: String, subtitle: String, time: String, order: Int, state: String): Service
    # addDescription(title: String, image: String, detail: String, detail_two: String): Description
  }

`;