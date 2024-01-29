const merge = require('loadsh/merge.js');
const resolversPerson = require('./person/resolversPerson');
const resolversService = require('./event/resolversService');
const resolversDay = require('./event/resolversDay');
const resolversEvent = require('./event/resolversEvent');

module.exports = merge(
  resolversPerson,
  resolversService,
  resolversDay,
  resolversEvent
);

