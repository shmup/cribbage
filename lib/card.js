export default class Card {
  constructor(num, suit) {
    this.value = num > 10 ? 10 : num
    this.suit = suit
    this.name = this.parseNum(num) + suit
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
