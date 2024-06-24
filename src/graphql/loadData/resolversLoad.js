const { UserInputError } = require('apollo-server');

const functionPerson = require('../person/functionsPerson');
const peopleData = require('../../data/PeopleData');

const loadRootPerson = async (_id) => {
  const data = peopleData.getRootData();
  // console.log('------', data);
  const created = [];
  for (const comp of data) {
    const { name, lastName, motherLastName, birthDate,
      gender, civilStatus, ci, photo, phone, address,
      location, state, email, registerId, registerDate,
      approvalId, approvalDate, user, level, userName, password,
      spiritual, legal } = data;
    created.push(
      functionPerson.addPerson(
        name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal
      )
    );
  }
  return created[0];
};

module.exports = {
  Mutation: {
    loadRootPerson(_, { id }, context) {
      return loadRootPerson(id);
    },
  }
};

