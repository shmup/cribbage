import Cribbage from './cribbage'

// let cribbage = new Cribbage()

var crib = new Cribbage()

crib.newHand()
// crib.logHand()

// let fifteens = crib.findFifteens(crib.hand)
// let sets = crib.findSets(crib.hand)

var runs = crib.findRuns(crib.hand)

while (!runs.length) {
  crib.newHand()
  runs = crib.findRuns(crib.hand)
}

crib.logHand()

// let flush = crib.isFlush(crib.hand)

// console.log(`${fifteens.length} Fifteens`)
// console.log(fifteens)
// console.log(`${sets.length} Sets`)
// console.log(sets)
console.log(`${runs.length} Runs`)
console.log(runs)
// console.log(`${flush ? 'Is a' : 'Not a'} Flush`)
