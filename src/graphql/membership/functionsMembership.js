const { UserInputError } = require("apollo-server");
const Membership = require("../../models/membershp");
const dateUtil = require('../../utility/dateUtil');


const getAllMemberships = async () => {
  const p = Membership.find({});
  console.log('-member----', p);
  return p;
};

const getMemberships = async (idPerson) => {
  const p = Membership.find({ idPerson }).sort({ "registerDate": -1});
  // const p = Day.find(parameter).sort({ "order": 1});
  return p;
};

const getCustomeMembership = async (filter) => {
  // console.log('-getCustomeMembership-', filter)
  const p = Membership.find(filter);
  return p;
};

const getMembershipActive = async (idPerson) => {
  // console.log('-getCustomeMembership-', filter)
  const state = "active";
  const p = Membership.findOne({ idPerson, state });
  return p;
};

const addMembership = async (
  idPerson,
  type,
  description,
  updateDate,
  idRegister,
  registerDate
) => {
  //  const dateTime = await dateUtil.getDateInTimestamp( await dateUtil.getDateInFormat("04/04/2024", "12", "50"));
  //  console.log('---datetime---', dateTime);
  //  const dt = 1718587375;
  const membershipActive = await getMembershipActive(idPerson);

  if(membershipActive) {
    return updateMembership(idPerson, type, description, updateDate, idRegister);
  } 

  const state = "active";
  const idC = await Membership.create({
    idPerson,
    type,
    description,
    updateDate,
    idRegister,
    registerDate,
    state,
  });
  const pack = await Membership.findOne(idC);

  return pack;
};

const updateMembership = async (
  idPerson,
  type,
  description,
  updateDate,
  idRegister,
  registerDate
) => {
  const membershipActive = await getMembershipActive(idPerson);
  const _id = membershipActive._id;
  const state = "inactive";
  await Membership.updateOne({_id}, {
    $set: {
      state
    }
  });
  return addMembership(idPerson, type, description, updateDate, idRegister, registerDate);
};

const deleteMembership = async (_id) => {
  const p = await Membership.findOne({ _id });
  await Membership.remove({ _id });
  return p;
};

module.exports = {
  getAllMemberships,
  getMemberships,
  getMembershipActive,
  getCustomeMembership,
  addMembership,
  updateMembership,
  deleteMembership,
};
