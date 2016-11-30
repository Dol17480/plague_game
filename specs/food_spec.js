var Food = require('../food');
var assert = require("assert");

describe('food', function(){

  var food1 = new Food("Chicken", 10, true);

  it('has name', function(){
    assert.equal("Chicken", food1.name);
  });

  it('has energy', function(){
    assert.equal(10, food1.energy);
  });

});