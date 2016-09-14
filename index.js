var borges = require('borges');
console.log(borges.foobar([1,2,3]));

var template = require('borges/template.jade');
console.log(template({
  title: 'Cool approach to modularization!',
  name: 'Horace Worblehat'
}));
