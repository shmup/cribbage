import Cribbage from './cribbage'
import m from 'mithril'
import _ from 'lodash'
import $ from 'jquery'

var app = {}

app.Cribbage = new Cribbage()

app.controller = () => {
  return {
    newGame: () => { 
      app.Cribbage.newHand()
      let hand = app.Cribbage.logHand()
      $("#log").append(`<p>${hand}</p>`)
    },
    findFifteens: () => {
      let fifteens = app.Cribbage.findFifteens()
      fifteens.forEach((f) => {
        let output = ""
        _.forEach(f, (k) => output += `${k.name} `)
        $("#log").append(`<p>${output}</p>`)
      })
    },
    findSets: () => {
      let sets = app.Cribbage.findSets()
      sets.forEach((f) => {
        let output = ""
        _.forEach(f, (k) => output += `${k.name} `)
        $("#log").append(`<p>${output}</p>`)
      })
    },
    findRuns: () => {
      let runs = app.Cribbage.findRuns()
      runs.forEach((f) => {
        let output = ""
        _.forEach(f, (k) => output += `${k.name} `)
        $("#log").append(`<p>${output}</p>`)
      })
    },
  }
}

app.view = (ctrl) => {
  return [
    m("button", {class: "mui-btn mui-btn-primary mui-btn-raised", onclick: ctrl.newGame}, "New Hand"),
    m("button", {class: "mui-btn mui-btn-primary mui-btn-raised", onclick: ctrl.findFifteens}, "Find Fifteens"),
    m("button", {class: "mui-btn mui-btn-primary mui-btn-raised", onclick: ctrl.findSets}, "Find Sets"),
    m("button", {class: "mui-btn mui-btn-primary mui-btn-raised", onclick: ctrl.findRuns}, "Find Runs"),
  ]
}

m.module(document.getElementById("app"), app)
