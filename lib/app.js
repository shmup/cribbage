import Cribbage from './cribbage'
import m from 'mithril'

var app = {}

app.Cribbage = new Cribbage()

app.Hand = function(data) {
  this.cards = m.prop(data.cards)
  this.score = m.prop("")
}

app.vm = (() => {
  var vm = {}
  vm.init = () => {
    vm.myHand = new app.Hand({cards: []})

    vm.newHand = () => {
      vm.myHand.cards(app.Cribbage.newHand())
      vm.myHand.score("")
    }

    vm.solveHand = () => {
      vm.myHand.score(`${app.Cribbage.findScore().total} points`)
    }
  }
  return vm
})()

app.controller = () => {
  app.vm.init()
}

app.view = () => {
  return m("div", [
    m("button", {onclick: app.vm.newHand, class: "minimal"}, "New Hand"),
    m("button", {onclick: app.vm.solveHand, class: "minimal"}, "Solve Hand"),
    m("ul", [
      app.vm.myHand.cards().map((c) => {
        return m("li", [
          m("div", {class: ("♦♥".indexOf(c.suit) > -1 ? "red" : "black") + " card"}, [
            m("span", {class: "rank"}, c.char),
            m("span", {class: "suit"}, c.suit),
            ])
        ])
      })
    ]),
    m("label", app.vm.myHand.score())
  ])
}

m.module(document.getElementById("app"), {controller: app.controller, view: app.view})
