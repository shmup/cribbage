import Cribbage from './cribbage'
import ko from 'knockout'


function GameViewModel() {
  this.cribbage = new Cribbage()
  this.hand = ko.observableArray(this.cribbage.newHand())
  this.newHand = function() {
    this.hand(this.cribbage.newHand())
  }
}

ko.applyBindings(new GameViewModel())
