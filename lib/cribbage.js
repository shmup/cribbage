import _ from 'lodash'
import Deck from './deck'

export default class Cribbage extends Deck {
  findFifteens(cards) {
    let lists = [], M = 1<<cards.length
    for(let i = 1 ; i < M ; ++i) {
        let sublist = cards.filter((c,k) => i>>k & 1)
        let sum = sublist.reduce((p,c) => {
          p = (typeof p === "object" ? p.value : p)
          c = (typeof c === "object" ? c.value : c)
          return p+c
        },0)
        if (sum == 15) lists.push(sublist)
    }
    return lists;
  }
  findSets(cards) {
    let lists = [], M = 1<<cards.length
    for(let i = 1 ; i < M ; ++i) {
        let sublist = cards.filter((c,k) => i>>k & 1)
        let equal = sublist.every((c) => {
          if (sublist.length !== 2) return
          c = (typeof c === "object" ? c.name.slice(0,-1) : c)
          return c === sublist[0].name.slice(0,-1)
        },0)
        if (equal) lists.push(sublist)
    }
    return lists
  }
  findRuns(cards) {
    let lists = [], M = 1<<cards.length
    let sortedCards = cards.sort((a, b) => a.rank > b.rank)
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
      let checkingRanks = _.pluck(checking, 'name')
      let similarity = []
      uniqueRun.forEach((l) => {
        similarity = _.intersection(checkingRank, _.pluck(l, 'name')
        if (similarity.length != l.length) {
          uniqueRun.push(checking)
        }
      })
    }

    return uniqueRun
  }
  isFlush(cards) {
    return cards.every((c) => c.suit === cards[0].suit)
  }
}
