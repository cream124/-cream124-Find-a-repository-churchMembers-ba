const { UserInputError } = require('apollo-server');
const DateUtil = require('../../utility/dateUtil')
const Person = require('../../models/person');
const Person2 = require('../../models/person');
const personFunctions = require('./functionsPerson');
const membershipFunctions = require('../membership/functionsMembership');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat')

const getPerson = async () => {
  const p = Person.find({});
  return p;
};

const getAPerson = async(_id) => {
  const d = await Person.findOne({_id})
  return d;
};

const validateNames = async (name, lastName, motherLastName, id) => {
  const filter= {
    name,
    lastName, 
    motherLastName,
    _id: {$ne: id}
  }
  const persons = await Person.find(filter);
  if(persons.length > 0) {
    throw new UserInputError('Ya está registrado el usuario con los mismos nombres y apellidos', {
      argumentName: 'id'
    });
  }
};

const validateCi = async (ci, id) => {
  if(ci.length > 0) {
    const filter= {
      ci,
      _id: {$ne: id}
    }
    const persons = await Person.find(filter);
    if(persons.length > 0) {
      throw new UserInputError('Ya está registrado el usuario con el mismo CI', {
        argumentName: 'id'
      });
    }
  }
};

const validateEmail = async (email, user) => {
  if(user){
    const filter= {
      email
    }
    const persons = await Person.find(filter);
    if(persons.length > 0) {
      throw new UserInputError('Ya está registrado el usuario con el mismo Email', {
        argumentName: 'id'
      });
    }
  }
};

const addPerson = async (name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal) => {
 console.log('=sp==========', spiritual);
    await validateNames(name, lastName, motherLastName);
    await validateCi(ci);
    await validateEmail(email, user);

    var encryptedPassword = await bcrypt.hash(password, 10);
    // console.log('=encryptedPassword==========', encryptedPassword);
    const personId = await Person.create({
      name,
      lastName,
      motherLastName,
      birthDate, 
      gender,
      civilStatus,
      ci, 
      photo,
      phone, 
      address, 
      location, 
      state, 
      email, 
      registerId,
      registerDate,
      approvalId, 
      approvalDate, 
      user, 
      level, 
      userName, 
      password: encryptedPassword,
      spiritual,
      legal
    });
    console.log('======', personId);
    return Person.findOne(personId);
};

const updatePerson = async (_id, name, lastName, motherLastName, birthDate, gender, civilStatus,
  ci, photo, phone, address,  location, state, email, uptadeId, updateDate, user,
  userName, password, spiritual, legal ) => {
 
  await validateNames(name, lastName, motherLastName, _id);
  await validateCi(ci, _id);
  // await validateEmail(email, user);

  var encryptedPassword = await bcrypt.hash(password, 10);
  // console.log('=encryptedPassword==========', encryptedPassword);
  await Person.updateOne({_id},
    {
      $set: { name, lastName, motherLastName, birthDate, gender, civilStatus,
      ci, photo, phone, address,  location, state, email, uptadeId, updateDate, user,
      userName, password, spiritual, legal 
      }
    }
  );
  return await Person.findOne({_id});
};

const filterByStatePersons = async (state) => {
  const persons = await Person.find(state);
  return persons;
};

const filterPersons = async (filter) => {
  console.log('=persons=00======', filter);
  // const filter = {
  //   "state": "registered",
  //   "startDate": "04-12-2000",
  //   "endDate": "04-12-2000"
  // }
  const persons = await Person.find(filter);
  // console.log('=persons=======', persons);

  if(!filter.startDate){
    return persons;
  }

  const startDate = filter.startDate;
  const endDate = filter.endDate;

  const filteredPerson = persons.filter(function (per) {
    dayjs.extend(customParseFormat);
    // let fe = dayjs(per.birthDate, 'DD-MM-YYYY');
    let fe = dayjs(per.birthDate);
    // console.log('****fe******', fe)
    const fe1 = dayjs(startDate, 'DD-MM-YYYY');
    let fe2 = dayjs(endDate, 'DD-MM-YYYY');
    // console.log('****fe1******', fe1)
    // console.log('****fe2******', fe2)
    
    const year = fe1.year();
    fe = fe.year(year);
    fe2 = fe2.year(year);
    
    return fe >= fe1 && fe2 >= fe
    // return value !== null && fe >= fe1 && fe2 >= fe
  });

  return filteredPerson;
};

const updateState = async (ids, state, approvalId, approvalDate) => {
  for (const _id of ids) {
    await Person.updateOne({_id}, {
      $set: {
        state,
        approvalId,
        approvalDate
      }
      
    });
  }
  return await Person.findOne({_id: ids[0]});
};

const loginPerson = async (userName, email, password) => {
  const user = await Person.findOne({email});
 
  if (user && (await bcrypt.compare(password, user.password))) {
    if(user.state === 'active') {
      const token = jwt.sign(
        {_id: user._id, email, level: user.level, name: user.name},
        "UNSAFE_STRING",
        {
          expiresIn: "2h"
        }
      );
      user.token = token;
      return user;
    } else {
      console.log('Error-inactive user------------');
      throw new UserInputError('El usuario no está activo aun', {
        argumentName: 'id'
      });  
    }
  } else {
    console.log('Error-------------');
    throw new UserInputError('Correo electrónico o contraseña incorrecta', {
      argumentName: 'id'
    });
  }
};

const asARootPerson = async (_id) => {
  await Person.updateOne({_id}, {
    $set: {
        level: 700,
      }
      
    });
  
  return await Person.findOne({_id});
};

const deletePerson = async (_id) => {
  const user = await Person.findOne({_id});
  // await Person.deleteOne({_id});
  await Person.remove({_id});
  return user;
};

module.exports = {
  Query: {
    persons: async (_, args) => {
      return getPerson();
    },
    filterByStatePersons(obj, { state }, context) {
      console.log('------', state);
      console.log('resolver-contex.isAuth-ABN----------', context.isAuth);
      if (!context.isAuth) {
        throw new Error('Unauthenticated')
      }
      if (context.level === 700 ) {
        return filterByStatePersons({state});
      }
      // return filterByStatePersons({state});
      // return filterByStatePersons({state, registerId: context._id});

    },

    filterPersons(obj, { filter }, context) {
      console.log('------', filter);
      // console.log('resolver-contex.isAuth-----------', context.isAuth);
      // if (!context.isAuth) {
      //   throw new Error('Unauthenticated')
      // }
      // if (context.level === 700 ) {
      //   return filterByStatePersons({state});
      // }
      // return filterByStatePersons({state, registerId: context._id});
      return filterPersons(filter);
    },
    person(obj, { id }, context) {
      console.log('---', id);
      return getAPerson(id);
    }
  },
  Person: {
    registerName: async (person) => {
      const p = await personFunctions.getAPerson(person.registerId);
      return p.name ? p.name: '-';
    },
    membershipType: async (person) => {
      const p = await membershipFunctions.getMembershipActive(person._id.toString());
      return p ? p.type: '-';
    },
    age: async (person) => {
      const p = await DateUtil.getAge(person.birthDate);
      return p;
    },
  },
  Mutation: {
    createPerson(obj, { name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state,
      email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal }, context) {
      console.log('------', name);
      return personFunctions.addPerson(name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal);
      // return addPerson(name, lastName, motherLastName, birthDate, gender, civilStatus, ci, photo, phone, address, location, state, email, registerId, registerDate, approvalId, approvalDate, user, level, userName, password, spiritual, legal);
    },
    updateStatePerson(obj, { ids, state, approvalId, approvalDate }, context) {
      return updateState(ids, state, approvalId, approvalDate);
    },

    updatePerson(obj, { id, name, lastName, motherLastName, birthDate, gender, civilStatus,
      ci, photo, phone, address,  location, state, email, uptadeId, updateDate, user,
      userName, password, spiritual, legal }, context) {
      console.log('------', name);
      return updatePerson(id, name, lastName, motherLastName, birthDate, gender, civilStatus,
        ci, photo, phone, address,  location, state, email, uptadeId, updateDate, user,
        userName, password, spiritual, legal );
    },
   
    loginPerson(_, {login: { userName, email, password}}) {
      return loginPerson(userName, email, password);
    },

    asRootPerson(_, {id}, contex) {
      return asARootPerson(id);
    },

    deletePerson(_, {id}, context) {
      return deletePerson(id);
    }
  }
};

