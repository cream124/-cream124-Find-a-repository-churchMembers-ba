const {gql} = require('apollo-server');


module.exports = gql`
  type Person {
  _id: ID!
  name: String
  lastName: String
  motherLastName: String
  birthDate: String
  ci: String
  photo: String
  phone: String
  address: String
  location: String
  state: String
  email: String
  registerId : String
  registerName: String
  registerDate: String
  approvalId: String
  approvalDate: String
  user: Boolean
  level: Int
  userName: String
  password: String
  christian: Boolean
  baptized: Boolean
}

type PersonUser {
  _id: ID!
  name: String
  lastName: String
  userName: String
  photo: String
  email: String
  level: Int
  password: String
  token: String
}

input Login {
  userName: String
  email: String
  password: String
}

input Filter {
  state: String
  startDate: String
  endDate: String
}

input RegisterPerson {
  name: String
  lastName: String
  motherLastName: String
  birthDate: String
  ci: String
  photo: String
  address: String
  location: String
  # state: String
}

type Query {
  persons: [Person]
  filterByStatePersons(state: String): [Person] 
  filterPersons(filter: Filter): [Person] 
  person(id: String): Person
}
type Mutation {
  createPerson(
    name: String!,
    lastName: String,
    motherLastName: String,
    birthDate: String,
    ci: String,
    photo: String,
    phone: String
    address: String,
    location: String,
    state: String
    email: String
    registerId : String
    registerDate: String
    approvalId: String
    approvalDate: String
    user: Boolean
    level: Int
    userName: String
    password: String
    christian: Boolean
    baptized: Boolean
  ): Person 
  
  updateStatePerson(
  ids: [String]
  state: String
  approvalId: String
  approvalDate: String
  ): Person 

  updatePerson(
    id: String!,
    name: String,
    lastName: String,
    motherLastName: String,
    birthDate: String,
    ci: String,
    photo: String,
    phone: String
    address: String,
    location: String,
    state: String
    email: String
    registerId : String
    registerDate: String
    approvalId: String
    approvalDate: String
    user: Boolean
    level: Int
    userName: String
    password: String
    christian: Boolean
    baptized: Boolean
  ): Person 

  loginPerson(login: Login): PersonUser
  
  asRootPerson(id: ID!): Person

  deletePerson(id: ID!): PersonUser
}
`;