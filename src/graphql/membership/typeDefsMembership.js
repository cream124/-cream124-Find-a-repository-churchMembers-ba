const { gql } = require("apollo-server");

module.exports = gql`
  type Membership {
    _id: String!
    idPerson: String
    type: String
    description: String
    updateDate: String
    idRegister: String
    registerName: String
    registerDate: String
    state: String
  }
 
  type Query {
    memberships: [Membership]
    getMemberships(idPerson: String): [Membership]
    membership(idPerson: String): Membership
  }

  type Mutation {
    createMembership(
      idPerson: String
      type: String
      description: String
      updateDate: String
      idRegister: String
      registerDate: String
    ): Membership

    updateMembership(
      idPerson: String
      type: String
      description: String
      updateDate: String
      idRegister: String
      registerDate: String
    ): Membership

    deleteMembership(id: String!): Membership
  }
`;
