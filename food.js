var assert = require('assert');

var Food = function(name, energy, status){
  this.name = name;
  this.energy = energy;
  this.status = status;
};



module.exports = Food;