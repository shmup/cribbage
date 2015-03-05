import _ from 'lodash'
import Deck from './deck'

export default class Cribbage extends Deck {
  findFifteens() {
    let lists = [], M = 1<<this.hand.length
    for(let i = 1 ; i < M ; ++i) {
        let sublist = this.hand.filter((c,k) => i>>k & 1)
        let sum = sublist.reduce((p,c) => {
          p = (typeof p === "object" ? p.value : p)
          c = (typeof c === "object" ? c.value : c)
          return p+c
        },0)
        if (sum == 15) lists.push(sublist)
    }
    console.log(lists)
    return lists;
  }
  findSets() {
    let lists = [], M = 1<<this.hand.length
    for(let i = 1 ; i < M ; ++i) {
        let sublist = this.hand.filter((c,k) => i>>k & 1)
        let equal = sublist.every((c) => {
          if (sublist.length !== 2) return
          c = (typeof c === "object" ? c.name.slice(0,-1) : c)
          return c === sublist[0].name.slice(0,-1)
        },0)
        if (equal) lists.push(sublist)
    }
    console.log(lists)
    return lists
  }
  findRuns() {
    let lists = [], M = 1<<this.hand.length
    let sortedCards = this.hand.sort((a, b) => a.rank > b.rank)
    for(let i = 1 ; i < M ; ++i) {
        let sublist = sortedCards.filter((c,k) => i>>k & 1)
        let consecutive = sublist.every((c, x) => {
          if (sublist.length < 3) return
          if (x === 0) return true
          c = (typeof c === "object" ? c.rank : c)
          return c-1 === sublist[x-1].rank
        },0)
        if (consecutive) lists.push(sublist)
    }

    let uniqueRun = []

    lists = lists.sort((a, b) => a.length < b.length)

    while (lists.length) {
      let checking = lists.shift()
      let checkingNames = _.pluck(checking, 'name')
      let passing = true
      let similarity = []
      uniqueRun.forEach((l) => {
        similarity = _.intersection(checkingNames, _.pluck(l, 'name'))
        if (similarity.length == checkingNames.length) {
          passing = false
        }
      })
      if (passing) {
        uniqueRun.push(checking)
      }
    }
    console.log(uniqueRun)
    return uniqueRun
  }
  isFlush() {
    return this.hand.every((c) => c.suit === this.hand[0].suit)
  }
}
