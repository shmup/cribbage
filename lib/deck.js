import _ from 'lodash'
import Card from './card'

export default class Deck {
  constructor() {
    this.cards = []
    this.build()
  }
  build() {
    _.range(1,13).map((num) =>
      "♠♥♦♣".split("").map((suit) =>
        this.cards.push(new Card(num, suit))
      )
    )
  }
  shuffle() {
    _.times(20, () => {
      this.cards = _.shuffle(this.cards)
    })
  }
  newHand() {
    this.shuffle()
    return _.slice(this.cards, 0, 6)
  }
}


