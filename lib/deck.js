import _ from 'lodash'
import Card from './card'
import Cribbage from './cribbage'

export default class Deck extends Cribbage {
  constructor() {
    this.deck = []
    this.hand = []
    this.build()
  }
  build() {
    // build a 52 card deck
    _.range(1,13).map((num) =>
      "♠♥♦♣".split("").map((suit) =>
        this.deck.push(new Card(num, suit))
      )
    )
  }
  shuffle() {
    // shuffle the deck 20 damn times
    _.times(20, () => {
      this.deck = _.shuffle(this.deck)
    })
  }
  logHand() {
  // helper function to console log the hand
    var output = ""
    _.forEach(this.hand, (k) => output += `${k.name} `)
    console.log("Hand: " + output)
  }
  newHand() {
    // build a new hand of 6 cards
    this.shuffle()
    this.hand = _.slice(this.deck, 0, 5)
    return this.hand
  }
}


