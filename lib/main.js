import Deck from './deck'

let deck = new Deck()

deck.newHand().map((c) => console.log(c.name))
