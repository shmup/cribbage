import Cribbage from './cribbage'
import ko from 'knockout'


function GameViewModel() {
  this.cribbage = new Cribbage()
  this.hand = ko.observableArray(this.cribbage.newHand())
  this.newHand = function() {
    this.hand(this.cribbage.newHand())
  }
}

ko.components.register('card', {
  viewModel: (params) => {
    this.suit = params.suit
    this.name = params.name
  },
template: '<div data-bind="text: name"></div>'
})

ko.applyBindings(new GameViewModel())
