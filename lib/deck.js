import _ from 'lodash'

export default class Deck {
  constructor() {
    this.cards = []
    this.build()
  }
  build() {
    _.range(1,13).map((c) =>
      "♠♥♦♣".split("").map((s) =>
        this.cards.push(`${c}${s}`)
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


