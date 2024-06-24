const { UserInputError } = require('apollo-server');

const functions = require('./functionsMembership');
// const functionsOffice = require('./functionsOffice');

module.exports = {
  // addCompany,
  Query: {
    memberships() {
        return functions.getAllMemberships();
    },
    getMemberships(obj, { idPerson }, context) {
      return functions.getMemberships(idPerson);
    },
    membership(obj, { idPerson }, context) {
      return functions.getMembershipActive(idPerson);
    },
  },

  Mutation: {
    createMembership(obj, {idPerson, type, description, updateDate, idRegister}, context) {
      // console.log('------', area);
      return functions.addMembership(idPerson, type, description, updateDate, idRegister);
    },

    updateMembership(obj, {idPerson, type, description, updateDate, idRegister}, context) {
      // console.log('------', area);
      return functions.updateMembership(idPerson, type, description, updateDate, idRegister);
    },

    deleteMembership(_, {id}, context) {
      return functions.deleteMembership(id);
    },
    
  }
};

