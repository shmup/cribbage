import _ from 'lodash'
import Card from './card'
import Cribbage from './cribbage'

export default class Deck extends Cribbage {
  constructor() {
    this.deck = []
    this.hand = []
    this.build()
  }

  // build a 52 card deck
  build() {
    _.range(1,13).map((num) =>
      "♠♥♦♣".split("").map((suit) =>
        this.deck.push(new Card(num, suit))
      )
    )
  }

  // shuffle the deck 20 damn times
  shuffle() {
    _.times(20, () => {
      this.deck = _.shuffle(this.deck)
    })
  }

  // build a new hand of 6 cards
  newHand() {
    this.shuffle()
    this.hand = _.slice(this.deck, 0, 6)
    return this.hand
  }
}


