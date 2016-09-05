'use strict';
var outcomeGenerator = require('../../component/outcomeGenerator');
var winEvaluator = require('../../component/winEvaluator');

function spin(game) {
  //console.log("SlotServer")
  /*
   return {
   symbols: reelset.initial,
   reelset: {
   basic: reelset.basic.initial,
   freespin: reelset.freespin.initial
   },
   gamestate: {current: "basic"},
   denomination: denominations,
   betlevel: betLevels,

   clientaction: "init",
   nextaction: "spin",
   multiplier: 1,

   betlines: betlines,
   win: 0,
   roundOver: true
   }
   * */
  //console.log(game)
  var currentReelSet = "basic";
  var outcome = outcomeGenerator.spin(currentReelSet);
  var winSituations = winEvaluator.getWinSituations(outcome, currentReelSet);
  var win =winEvaluator.accumulateWinAmout(winSituations);
  var outcomeReelSet = {};
  outcomeReelSet[currentReelSet] = outcome; //outcomeReelSet = {basic:{< spin outcome >}}

  return {
    roundOver: true,
    //bet:game.bet,
    win: win,
    reelset: outcomeReelSet,
    current: {reelset: currentReelSet},
    next: {reelset: "basic"},

    gamestate: {current: currentReelSet, next: "basic"},
    nextaction: "spin",
    multiplier: 1,
    clientaction: "spin",
    winsituation: winSituations


  }
}

module.exports = spin;
/*
 winsituation:[{
 betline: 6,
 symbol: "SYM5",
 position: {
 0: [0, 2],
 1: [1, 2],
 2: [2, 1],
 3: [3, 2],
 4: [4, 2],
 },
 wintypes: [{type: "coins", win: 60}]
 }, {
 betline: 13,
 symbol: "SYM4",
 position: {
 0: [0, 1],
 1: [1, 1],
 2: [2, 0],
 3: [3, 1],
 4: [4, 1]
 },
 wintypes: [{type: "coins", win: 100}]
 }]
 */
