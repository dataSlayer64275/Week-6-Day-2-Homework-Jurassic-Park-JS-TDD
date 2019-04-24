const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = 5
  this.dinosaurs = []
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.unshift(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.pop(dinosaur)
}

Park.prototype.findDinosaurSpecies = function(species) {
  for (var dinosaur of this.dinosaurs)
    if (dinosaur.species === species)
    return dinosaur
}

Park.prototype.dailyVisitors = function () {
  let total = 0
  for (var dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay
    }
    return total
}
Park.prototype.visitorsYear = function () {
  let total = 0
  for (var dinosaur of this.dinosaurs) {
    total += dinosaur.guestsAttractedPerDay
    }
    let yearTotal = (total * 365)
    return yearTotal
}
// Park.prototype.removeDinosaurSpecies = function(species) {
//   for (var dinosaur of this.dinosaurs)
//     if (dinosaur.species === species)
//
// }

module.exports = Park;
