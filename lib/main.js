import _ from 'lodash'
import Deck from './deck'

let deck = new Deck()

function fifteenz() {
  var fifteenHands = []
    var html = ""

    while (fifteenHands.length < 100) {
      deck.newHand()
        let fifteens = deck.findFifteens()
        if (fifteens.length) {
          fifteenHands.push([deck.hand, fifteens])
        }
    }
  _.forEach(fifteenHands, (c) => {
    var hand = ""
    var combo = ""
    _.map(c[1], (k) => {
      _.forEach(k, (c) => {
        combo += `${c.name} `
      })
      combo += "<br>"
    })
  _.forEach(c[0], (k) => {
    hand += `${k.name} `
  })

  html += `<div class="panel panel-default">
    <div class="panel-body">
    <p style='color: blue'>${hand}</p>
    <p>${combo}</p>
    </div>
    </div>`
  })

  document.getElementById("fifteens").innerHTML = html
}

// console.log(deck.findSets())

fifteenz()
