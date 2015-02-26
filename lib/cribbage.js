import _ from 'lodash'

export default class Cribbage {
  findFifteens() {
    var lists = []

    _.forEach(this.deck, (card, i) => {

      let sublist = this.deck.filter((c,k) => {
        return i >> k & 1
      })

      let sum = sublist.reduce((p,c) => {
        return p+c.value
      }, 0)

      if (sum == 15) {
        lists.push(sublist)
      }
    })

    return lists
  }
  findRuns() {
    // TODO - find all 3+ card runs
  }
  findSets() {
    // TODO - find all pairs, trips, and four of a kind
  }
}
