const { UserInputError } = require('apollo-server');

const Event = require('../../models/event');
const Day1 = require("./resolversDay");



let active;

const getEvents = async() => {
  active = "";
  const p = Event.find().sort({ "order": 1});
  return p;
};

const getAEvent = async(_id) => {
  active = "";
  const d = await Event.findOne({_id})
  return d;
};

const getActiveEvents = async() => {
  active = "active";
  const p = Event.find(
    {state: active}
    ).sort({ "order": 1});
  return p;
};

const getEventsFilter = async(state) => {
  active = "";
  const p = Event.find({"state": state});
  return p;
};

const addEvent = async (title, type, image, order, state) => {
  const personId = await Event.create({
    title, type, image, order, state
  });
  return Event.findOne(personId);
};

const uptateEvent = async (_id, title, type, image, order, state) => {
  await Event.updateOne({_id}, {
    $set: {
      title, type, image, order, state
    }
  });
  return await Event.findOne({_id});
};


const deleteEvent = async (_id) => {
  const d = await Event.findOne({_id})
  await Event.remove({_id});
  return d;
};


module.exports = {
  Query: {
    events() {
        return getEvents();
    },
    event(obj, { id }, context) {
      console.log('---', id);
      return getAEvent(id);
  },
    activeEvents() {
      return getActiveEvents();
    },
    eventsF(obj, {state}, context, info) {

      console.log('resolver-contex.isAuth-----------', context.isAuth);
      if (!context.isAuth) {
        throw new Error('Unauthenticated')
      } 
      return getEventsFilter(state);
      
      
    }
  },

  Event: {
    days: (event) => {
     console.log("---days---", active);
      return Day1.Query.days(event._id, active);
      // return Days.find({
      //   eventId: event._id,
      //   state: "active"
      //   // inactive
      // },{
      //   sort: {order: 1}
      // }).fetch()
    }
  },
  
  Mutation: {
    createEvent(obj, {title, type, image, order, state}, context) {
      console.log('-event-----', title);
      return addEvent(title, type, image, order, state);
    },
    
    deleteEvent(_, {id}, context) {
      return deleteEvent(id);
    
    },
    updateEvent(obj, { id, title, type, image, order, state}, context) {
      console.log('-event-----', title);
      return uptateEvent(id, title, type, image, order, state);
    },
    
  }
};

