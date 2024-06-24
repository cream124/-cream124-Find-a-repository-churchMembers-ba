const typeDefsPerson = require('./person/typeDefsPerson');
const typeDefsMembership = require('./membership/typeDefsMembership');
const typeDefsService = require('./event/typeDefsService');
const typeDefsDay = require('./event/typeDefsDay');
const typeDefsEvent = require('./event/typeDefsEvent');
const typeDefsLoadData = require('./loadData/typeDefsLoad');

module.exports = [
  typeDefsPerson,
  typeDefsMembership,
  typeDefsService,
  typeDefsDay,
  typeDefsEvent,
  typeDefsLoadData
];