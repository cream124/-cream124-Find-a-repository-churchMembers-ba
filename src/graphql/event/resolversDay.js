const { UserInputError } = require('apollo-server');
const Day = require('../../models/day');

const Servives1 = require("./resolversService");
// import Day from "./day";
// import Services from "../service/service";
// import Servives1 from "../service/resolvers";

let active;

const getDays = async(id, activ) => {
  active = activ;
  const parameter = active === 'active'
    ? {eventId: id, state: "active"}
    : {eventId: id,}; 
  const p = Day.find(parameter).sort({ "order": 1});
  return p;
};


const getDaysForEvent = async(id) => {
  active = '';
  const p = Day.find({eventId: id});
  return p;

  // const p = Day.find({}).fetch();
  // return p;
};

const getDay = async(_id) => {
  active = '';
  const d = await Day.findOne({_id})
  return d;
};

const addDay = async (executionDay, date, image, order, state, eventId) => {
  const personId = await Day.create({
    executionDay, 
    date, 
    image, 
    order, 
    state, 
    eventId
  });
  return Day.findOne(personId);
};

const deleteDay = async (_id) => {
  const d = await Day.findOne({_id})
  await Day.remove({_id});
  return d;
};

const uptateDay = async (_id, executionDay, date, image, order, state, eventId) => {
  await Day.updateOne({_id}, {
    $set: {
      executionDay, date, image, order, state, eventId
    }
  });
  return await Day.findOne({_id});
};



module.exports = {
  Query: {
    days(id, active) {
        return getDays(id, active);
      },
      getDays(obj, { eventId }, context) {
        console.log('---', eventId);
        return getDaysForEvent(eventId);
      },
      getDay(obj, { id }, context) {
        console.log('---', id);
        return getDay(id);
      },

  },

  Day: {
    services: (day) => {
      return Servives1.Query.services(day._id, active);

      // return Services.find({
      //   dayId: day._id,
      // },{
      //   sort: {order: 1}
      // }).fetch()
    }
  },
  
  Mutation: {
    createDay(obj, {executionDay, date, image, order, state, eventId}, context) {
      return addDay(executionDay, date, image, order, state, eventId);
    },

    deleteDay(_, {id}, context) {
      return deleteDay(id);
    
    },
    updateDay(obj, {id, executionDay, date, image, order, state, eventId}, context) {
      console.log('-event-----', executionDay);
      return uptateDay(id, executionDay, date, image, order, state, eventId);
    },
  },
};

