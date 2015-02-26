import _ from 'lodash'
import Card from './card'
import Cribbage from './cribbage'

export default class Deck extends Cribbage {
  constructor() {
    this.cards = []
    this.build()
  }

  // build a 52 card deck
  build() {
    _.range(1,13).map((num) =>
      "♠♥♦♣".split("").map((suit) =>
        this.cards.push(new Card(num, suit))
      )
    )
  }

  // shuffle the deck 20 damn times
  shuffle() {
    _.times(20, () => {
      this.cards = _.shuffle(this.cards)
    })
  }

  // build a new hand of 6 cards
  newHand() {
    this.shuffle()
    return _.slice(this.cards, 0, 6)
  }
}


