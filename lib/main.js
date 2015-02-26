import _ from 'lodash'
import Deck from './deck'

let deck = new Deck()

var fifteenHands = []

while (fifteenHands.length < 20) {
  deck.newHand()
  let fifteens = deck.findFifteens()
  if (fifteens.length) {
    fifteenHands.push(fifteens)
  }
}

_.forEach(fifteenHands, (c) => {
  var combo = ""
  _.forEach(c.shift(), (k) => {
    combo += `${k.name} `
  })
  document.write(`<p>${combo}</p>`)
  console.log(combo)
})
