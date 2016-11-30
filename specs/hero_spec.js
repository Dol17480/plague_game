var Hero = require('../hero');
var assert = require("assert");

describe('hero', function(){

  var hero1 = new Hero("He-man", 100, "Steak");

  it('should talk', function(){
    assert.equal("I am a hero", hero1.talk());

  });

});
