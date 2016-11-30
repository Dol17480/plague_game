var assert = require('assert');

var Rat = function(){
};

Rat.prototype = {
  touch: function(food){
    food.status = false;
  }
  };

module.exports = Rat;