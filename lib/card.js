export default class Card {
  constructor(rank, suit) {
    this.value = rank > 10 ? 10 : rank
    this.rank = rank
    this.suit = suit
    this.char = this.parseNum(rank)
    this.name = this.parseNum(rank) + suit
  }
  parseNum(num) {
    if (num < 11 && num > 1) return num
    if (num == 1) {
      return "A"
    } else  if (num == 11) {
      return "J" 
    } else if (num == 12) {
      return "Q"
    }
    return "K"
  }

}
