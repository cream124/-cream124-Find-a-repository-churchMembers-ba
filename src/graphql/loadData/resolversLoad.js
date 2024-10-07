const { UserInputError } = require('apollo-server');

const functionPerson = require('../person/functionsPerson');
const peopleData = require('../../data/PeopleData');
const peopleAllData = require('../../data/PeopleAllData');
const peopleSpiritualData = require('../../data/PeopleSpiritualData');
const peopleLegalData = require('../../data/PeopleLegalData');

const loadRootPerson = async (_id) => {
  const data = peopleData.getRootData();
  // console.log('------', data);
  const created = [];
  for (const comp of data) {
    const { name, lastName, motherLastName, birthDate,
      gender, civilStatus, ci, photo, phone, address,
      location, state, email, registerId, registerDate,
      approvalId, approvalDate, user, level, userName, password,
      spiritual, legal } = comp;
    created.push(
      functionPerson.addPerson(
        name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal
      )
    );
  }
  return created[0];
};

const loadAllPerson = async (_id) => {
  const data = peopleAllData.getAllData();
  const spiritualData = peopleSpiritualData.getSpiritualData();
  const legalData = peopleLegalData.getLegalData();
  // console.log('------', data);
  const created = [];
  for (const comp of data) {
    // console.log('--data----', comp);

    const { name, lastName, motherLastName, birthDate,
      gender, civilStatus, ci, photo, phone, address,
      location, state, email, registerId, registerDate,
      approvalId, approvalDate, user, level, userName, password,
      spiritual, legal } = comp;

    const spiritual1 = spiritualData[0];
    const legal1 = legalData[0];
    console.log('--spiritual1----', spiritual1);

    created.push(
      functionPerson.addPerson(
        name.trim(), lastName.trim(), motherLastName.trim(), birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual1, legal1
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
    loadAllPerson(_, { id }, context) {
      return loadAllPerson(id);
    },
  }
};

