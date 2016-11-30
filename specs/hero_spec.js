var Hero = require('../hero');
var assert = require("assert");
var Food = require('../food');
var Rat = require('../rat');

describe('hero', function(){

  var hero1;
  var food1;
  var food2;
  var food3;
  var rat1;

  beforeEach(function(){
  hero1 = new Hero("He-man", 100, "Steak");
  food1 = new Food("Chicken", 10);
  food2 = new Food("Steak", 10);
  food3 = new Food("Apple", 10);
  rat1 = new Rat();
  });

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
  });

  it('should decrease hero health', function(){
    rat1.touch(food3);
    hero1.eat(food3);
    assert.equal(50, hero1.health);
  });

});
