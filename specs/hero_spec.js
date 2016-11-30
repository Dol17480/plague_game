var Hero = require('../hero');
var assert = require("assert");
var Food = require('../food');

describe('hero', function(){

  var hero1 = new Hero("He-man", 100, "Steak");
  var food1 = new Food("Chciken", 10)

  it('should talk', function(){
    assert.equal("I am a hero", hero1.talk());
  });

  it('should have name', function(){
    assert.equal("He-man", hero1.name);
  });

  it('should have food', function(){
    assert.equal("Steak", hero1.food);
  });

  it('should have health', function(){
    assert.equal(100, hero1.health);
  });

  it('should increase health', function(){
     hero1.eat(food1);
     assert.equal(110, hero1.health);
  })

});
