var Hero = require('../hero');
var assert = require("assert");
var Food = require('../food');

describe('hero', function(){

  var hero1;
  var food1;
  var food2;

  beforeEach(function(){
  hero1 = new Hero("He-man", 100, "Steak");
  food1 = new Food("Chicken", 10, true)
  food2 = new Food("Steak", 10, true)
  })

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

  it('should get health boost', function(){
    hero1.eat(food2);
    assert.equal(115, hero1.health);
  })

});
