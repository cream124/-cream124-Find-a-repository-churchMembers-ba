const { UserInputError } = require('apollo-server');
const Service = require('../../models/service');

let active;

const getService = async(id, activ) => {
  active = activ;
  const parameter = active === 'active'
    ? {dayId: id, state: "active"}
    : {dayId: id,}; 
  
  const p = Service.find(parameter).sort({ "order": 1});
  return p;
};

const getAService = async(_id) => {
  const d = await Service.findOne({_id})
  return d;  
};

const addService = async (name, subtitle, time, description2, order, state, photo, dayId) => {
  const personId = await Service.create({
    name, subtitle, time, description2, order, state, photo, dayId
  });
  return Service.findOne(personId);
};

const uptateService = async (_id, name, subtitle, time, description2, order, state, photo, dayId) => {
  await Service.updateOne({_id}, {
    $set: {
      name, subtitle, time, description2, order, state, photo, dayId
    }
  });
  return await Service.findOne({_id});
};

const deleteService = async (_id) => {
  const d = await Service.findOne({_id})
  await Service.remove({_id});
  return d;
};


module.exports = {
  Query: {
    services(id, activ) {
        return getService(id, activ);
    },
    getService(obj, { id }, context) {
        console.log('---', id);
        return getAService(id);
    }
  },

  
  
  Mutation: {
    createService(obj, {name, subtitle, time, description2, order, state, photo, dayId}, context) {
      console.log('------', name);
      return addService(name, subtitle, time, description2, order, state, photo, dayId);
    },

    deleteService(_, {id}, context) {
      return deleteService(id);
    },
    updateService(obj, {id, name, subtitle, time, description2, order, state, photo, dayId}, context) {
      console.log('-event-----', name);
      return uptateService(id, name, subtitle, time, description2, order, state, photo, dayId);
    },

  }
};

