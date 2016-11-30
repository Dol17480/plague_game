var assert = require('assert');

var Hero = function(name, health, food){
  this.name = name;
  this.health = health;
  this.food = food
};

Hero.prototype = {
  talk: function(){
    return "I am a hero";
  },
  eat: function(food){
    if (food.isPoisoned === true){
      food.energy = -50;
    }
    if(food.name === this.food && food.isPoisoned === false){
      food.energy *= 1.5;
    }
     this.health += food.energy;
    }
  };


module.exports = Hero;