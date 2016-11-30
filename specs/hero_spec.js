var Hero = require('../hero');
var assert = require("assert");

describe('hero', function(){

  var hero1 = new Hero("He-man", 100, "Steak");

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

});
