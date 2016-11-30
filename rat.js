var Rat = function(){
};

Rat.prototype = {
  touch: function(food){
    food.isPoisoned = true;
  }
  };

module.exports = Rat;