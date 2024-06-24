const merge = require('loadsh/merge.js');
const resolversPerson = require('./person/resolversPerson');
const resolversMembership = require('./membership/resolversMembership');
const resolversService = require('./event/resolversService');
const resolversDay = require('./event/resolversDay');
const resolversEvent = require('./event/resolversEvent');
const resolversLoadData = require('./loadData/resolversLoad');


module.exports = merge(
  resolversPerson,
  resolversMembership,
  resolversService,
  resolversDay,
  resolversEvent,
  resolversLoadData
);

