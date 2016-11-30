var Rat = require('../rat')
var Food = require('../food');
var assert = require("assert");

describe('rat', function(){

    var rat1;
    var food1;

  beforeEach(function(){
    rat1 = new Rat();
    food1 = new Food("Lettuce", 1)
  })
  

    it("should change food status", function(){
      rat1.touch(food1);
      assert.equal(true, food1.isPoisoned);
    });


  });