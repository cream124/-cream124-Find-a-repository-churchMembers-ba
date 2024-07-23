const { UserInputError } = require('apollo-server');
const personFunctions = require('../person/functionsPerson');
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

  Membership: {
    registerName: async (member) => {
      const p = await personFunctions.getAPerson(member.idRegister);
      return p.name ? `${p.name} ${p.lastName}`: '-';
    },
  },

  Mutation: {
    createMembership(obj, {idPerson, type, description, updateDate, idRegister, registerDate}, context) {
      // console.log('------', area);
      return functions.addMembership(idPerson, type, description, updateDate, idRegister, registerDate);
    },

    updateMembership(obj, {idPerson, type, description, updateDate, idRegister, registerDate}, context) {
      // console.log('------', area);
      return functions.updateMembership(idPerson, type, description, updateDate, idRegister, registerDate);
    },

    deleteMembership(_, {id}, context) {
      return functions.deleteMembership(id);
    },
    
  }
};

