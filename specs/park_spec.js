const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park ('Jurassic Park')
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 65);
    dinosaur3 = new Dinosaur('triceratops', 'herbivore', 80);
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
  });


  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur2, dinosaur1])
    // Why deepStrictEqual
    // Important to get objects in array in correct order - is there
    // an easier way to do this
  });

  it('should be able to add a dinosaur to its collection', function(){
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 3)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1)
    const actual = park.dinosaurs.length
    assert.strictEqual(actual, 2)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinosaurSpecies('t-rex')
    assert.strictEqual(actual, dinosaur1)
  });

  // Possible to make the tests pass by leaving them empty?

  it ('should be able to calculate the total number of visitors per day', function () {
    const actual = park.dailyVisitors()
    assert.strictEqual(actual, 195)
  });

  it ('should be able to calculate the total number of visitors per year', function () {
    const actual = park.visitorsYear()
    assert.strictEqual(actual, 71175)
  });

  it('should be able to remove all dinosaurs of a particular species');

});
