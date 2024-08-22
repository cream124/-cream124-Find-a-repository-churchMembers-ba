const ObjectId = require('mongodb').ObjectId;
const { UserInputError } = require('apollo-server');
const Person = require('../../models/person');
const membershipFunctions = require('../membership/functionsMembership');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat')

const getPerson = async () => {
  const p = Person.find({});
  return p;
};

const getAPerson = async (_id) => {
  if (ObjectId.isValid(_id)) {
    const d = await Person.findOne({ _id })
    return d;
  }
  return {};
};

const validateNames = async (name, lastName, motherLastName, id) => {
  const filter = {
    name,
    lastName,
    motherLastName,
    _id: { $ne: id }
  }
  const persons = await Person.find(filter);
  if (persons.length > 0) {
    throw new UserInputError('Ya está registrado el usuario con los mismos nombres y apellidos', {
      argumentName: 'id'
    });
  }
};

const validateCi = async (ci, id) => {
  if (ci.length > 0) {
    const filter = {
      ci,
      _id: { $ne: id }
    }
    const persons = await Person.find(filter);
    if (persons.length > 0) {
      throw new UserInputError('Ya está registrado el usuario con el mismo CI', {
        argumentName: 'id'
      });
    }
  }
};

const validateEmail = async (email, user, id) => {
  if (user) {
    const filter = {
      email,
      _id: { $ne: id }
    }
    console.log('-----filter----------', filter);
    const persons = await Person.find(filter);
    if (persons.length > 0) {
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
  console.log('==._id.toString()====', personId._id.toString());
  console.log('==spiritual.baptized====', spiritual.baptized);

  if (spiritual.baptized) {
    await membershipFunctions.addMembership(
      personId._id.toString(),
      "Activo",
      "Activo por registro.",
      spiritual?.becameMembreDate,
      registerId
    );
  }
  return Person.findOne(personId);
};

const updatePerson = async (_id, name, lastName, motherLastName, birthDate, gender, civilStatus,
  ci, photo, phone, address, location, state, email, uptadeId, updateDate, user,
  userName, password, updatingUser, spiritual, legal) => {

  await validateNames(name, lastName, motherLastName, _id);
  await validateCi(ci, _id);
  // await validateEmail(email, user);

  var encryptedPassword = await bcrypt.hash(password, 10);
  // console.log('=encryptedPassword==========', encryptedPassword);
  console.log('*******updatingUser*********', updatingUser)
  if (updatingUser) {
    await Person.updateOne({ _id },
      {
        $set: {
          name, lastName, motherLastName, birthDate, gender, civilStatus,
          ci, photo, phone, address, location, state, email, uptadeId, updateDate, user,
          userName, password, spiritual, legal
        }
      }
    );
  } else {
    await Person.updateOne({ _id },
      {
        $set: {
          name, lastName, motherLastName, birthDate, gender, civilStatus,
          ci, photo, phone, address, location, state, uptadeId, updateDate, user,
          userName, spiritual, legal
        }
      }
    );
  }
  return await Person.findOne({ _id });
};

const updateSpirtualPerson = async (_id, becameMemberFor, becameMembreDate, libroN, folioN, membershipRegistrationDate, membershipRegistrationTime) => {
    await Person.updateOne({ _id },
      {
        $set: {
          spiritual: { becameMemberFor, becameMembreDate, libroN, folioN, membershipRegistrationDate, membershipRegistrationTime},
        }
      }
    );

  return await Person.findOne({ _id });
};

const updatePassword = async (_id, oldPassword, newPassword) => {
  
  const user = await Person.findOne({ _id });

  if (user && (await bcrypt.compare(oldPassword, user.password))) {
    const password =  await bcrypt.hash(newPassword, 10);
    await Person.updateOne({ _id },
      {
        $set: {
          password
        }
      }
    );
    return user;
  } else {
    // console.log('Error-------------');
    throw new UserInputError('La contraseña es incorrecta', {
      argumentName: 'password'
    });
  }
};

const updateUserPerson = async (_id, user, email, level, password1) => {
  
  
  const password = password1 ? await bcrypt.hash(password1, 10) : undefined;
  if (email) {
    await validateEmail(email, true, _id);
  }
  await Person.updateOne({ _id },
    {
      $set: {
        user, email, level, password
      }
    }
  );

return await Person.findOne({ _id });
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

  if (!filter.startDate) {
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
    await Person.updateOne({ _id }, {
      $set: {
        state,
        approvalId,
        approvalDate
      }

    });
  }
  return await Person.findOne({ _id: ids[0] });
};

const loginPerson = async (userName, email, password) => {
  const user = await Person.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    if (user.state === 'active') {
      const token = jwt.sign(
        { _id: user._id, email, level: user.level, name: user.name },
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
  await Person.updateOne({ _id }, {
    $set: {
      level: 700,
    }

  });

  return await Person.findOne({ _id });
};

const deletePerson = async (_id) => {
  const user = await Person.findOne({ _id });
  // await Person.deleteOne({_id});
  await Person.remove({ _id });
  return user;
};


module.exports = {
  addPerson,
  getAPerson,
  updatePerson, 
  updateSpirtualPerson,
  updateUserPerson,
  updatePassword
    // getAllMemberships,
  // getMemberships,
  // getMembershipActive,
  // getCustomeMembership,
  // addMembership,
  // updateMembership,
  // deleteMembership,
};
