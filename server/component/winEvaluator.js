"use strict";
var betlinesConfig = require('../config/betlines');
var paytable = require('../config/paytable');
var betlines = betlinesConfig.betlines;


function getSequenceOnBetLine(bl, outcome) {
  var seq = [];
  bl.forEach(function (value, idx) {
    seq.push(outcome[idx].symbols[value]);
  });

  return seq;
}


function evaluatorWinning(outcome, reelSet) {
  var winSituations = [];
  /*var outcomeMatrix = [
   [outcome.0.symbols[0], outcome.1.symbols[0], outcome.2.symbols[0], outcome.3.symbols[0], outcome.4.symbols[0]],
   [outcome.0.symbols[1], outcome.1.symbols[1], outcome.2.symbols[1], outcome.3.symbols[1], outcome.4.symbols[1]],
   [outcome.0.symbols[2], outcome.1.symbols[2], outcome.2.symbols[2], outcome.3.symbols[2], outcome.4.symbols[2]]
   ];*/

  for (var blKey in betlines) {
    var bl = betlines[blKey];
    var seq = getSequenceOnBetLine(bl, outcome);

    var situation = seq.reduce(function (collected, sym, idx) {
      if (idx === 0) {// set symbol in first iteration
        collected.symbol = sym;
      }
      if (collected.symbol === sym && collected.counter === idx) {
        collected.counter++;
      }
      return collected;
    }, {betline: blKey, position: bl, symbol: "", counter: 0});
    //console.log(winSituation);

    var ptForReelset = paytable[reelSet];
    // console.log(ptForReelset);
    var win = ptForReelset[situation.symbol][situation.counter];
    if (win) {
      /* console.log("********************************");
       console.log(seq,win);
       console.log("********************************");*/
      var winTypes = [{
        type: "coins",
        win: win.multiplier
      }];

      winSituations.push({
        betline: situation.betline,
        symbol: situation.symbol,
        position: situation.position,
        wintypes: winTypes
      });


    }
  }
  return winSituations;
}

function accumulateWinAmout(winSituations) {
  return winSituations.reduce(function (winAccumulated, winSituation) {
    return winAccumulated + winSituation.wintypes.reduce(function (winTypeAccumulatedWin, wintype) {
        return winTypeAccumulatedWin + wintype.win;
      }, 0)
  }, 0);
}

module.exports = {
  getWinSituations: evaluatorWinning,
  accumulateWinAmout: accumulateWinAmout
}

