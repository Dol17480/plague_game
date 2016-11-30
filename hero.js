var assert = require('assert');

var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food
};

Hero.prototype = {
  talk: function(){
    return "I am a hero";
  }
};


module.exports = Hero;