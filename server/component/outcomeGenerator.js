/**
 * Created by ishaan.puniani on 21-08-2016.
 */
var MersenneTwister = require('mersenne-twister');
// MersenneTwister uses Date().getTime() as a default seed - good enough
var generator = new MersenneTwister();

var reelset = require('../config/reelset');


// this is to get outcome as of strip is circular
function getSymbol(strip, idx) {
  interIndex = idx;
  if (idx === -1) {
    interIndex = strip.length - 1;
  }
  if (idx === strip.length) {
    interIndex = 0;
  }
  return strip[interIndex];
}

function generateOutcome(reelSet) {
  var reelStrip_0 = reelset[reelSet].reels[0];
  var reelStrip_1 = reelset[reelSet].reels[1];
  var reelStrip_2 = reelset[reelSet].reels[2];
  var reelStrip_3 = reelset[reelSet].reels[3];
  var reelStrip_4 = reelset[reelSet].reels[4];

  var pos_0 = Math.floor(generator.random() * reelStrip_0.length);
  var pos_1 = Math.floor(generator.random() * reelStrip_1.length);
  var pos_2 = Math.floor(generator.random() * reelStrip_2.length);
  var pos_3 = Math.floor(generator.random() * reelStrip_3.length);
  var pos_4 = Math.floor(generator.random() * reelStrip_4.length);

  var reels = {
    0: {
      position: pos_0,
      symbols: [getSymbol(reelStrip_0, pos_0 - 1), getSymbol(reelStrip_0, pos_0), getSymbol(reelStrip_0, pos_0 + 1)]
    },
    1: {
      position: pos_1,
      symbols: [getSymbol(reelStrip_1, pos_1 - 1), getSymbol(reelStrip_1, pos_1), getSymbol(reelStrip_1, pos_1 + 1)]
    },
    2: {
      position: pos_2,
      symbols: [getSymbol(reelStrip_2, pos_2 - 1), getSymbol(reelStrip_2, pos_2), getSymbol(reelStrip_2, pos_2 + 1)]
    },
    3: {
      position: pos_3,
      symbols: [getSymbol(reelStrip_3, pos_3 - 1), getSymbol(reelStrip_3, pos_3), getSymbol(reelStrip_3, pos_3 + 1)]
    },
    4: {
      position: pos_4,
      symbols: [getSymbol(reelStrip_4, pos_4 - 1), getSymbol(reelStrip_4, pos_4), getSymbol(reelStrip_4, pos_4 + 1)]
    }
  }
  return reels;
}
module.exports = {
  spin: generateOutcome
};
