const { gql } = require("apollo-server");

module.exports = gql`
  type Membership {
    _id: String!
    idPerson: String
    type: String
    description: String
    updateDate: String
    idRegister: String
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
    ): Membership

    updateMembership(
      idPerson: String
      type: String
      description: String
      updateDate: String
      idRegister: String
    ): Membership

    deleteMembership(id: String!): Membership
  }
`;
