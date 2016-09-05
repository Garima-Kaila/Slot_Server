/*
 * The MIT License
 *
 * Copyright 2016 ishaan.puniani.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';
module.exports = {
  basic: {
    reels: [
      ["SYM3", "SYM3", "SYM3", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM4", "SYM4", "SYM4", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM5", "SYM5", "SYM5", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM6", "SYM6", "SYM6", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM7", "SYM7", "SYM7", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"]
    ],
    initial: {
      0: {
        position: 0,
        symbols: ["SYM7", "SYM8", "SYM11"]
      },
      1: {
        position: 0,
        symbols: ["SYM3", "SYM12", "SYM8"]
      },
      2: {
        position: 0,
        symbols: ["SYM9", "SYM5", "SYM7"]
      },
      3: {
        position: 0,
        symbols: ["SYM10", "SYM4", "SYM12"]
      },
      4: {
        position: 0,
        symbols: ["SYM9", "SYM11", "SYM8"]
      },
    }
  },
  respin: {
    reels: [
      ["SYM3", "SYM3", "SYM3", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM4", "SYM4", "SYM4", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM5", "SYM5", "SYM5", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM6", "SYM6", "SYM6", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM7", "SYM7", "SYM7", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"]
    ],
    initial: {
      0: {
        position: 0,
        symbols: ["SYM7", "SYM8", "SYM11"]
      },
      1: {
        position: 0,
        symbols: ["SYM3", "SYM12", "SYM8"]
      },
      2: {
        position: 0,
        symbols: ["SYM9", "SYM5", "SYM7"]
      },
      3: {
        position: 0,
        symbols: ["SYM10", "SYM4", "SYM12"]
      },
      4: {
        position: 0,
        symbols: ["SYM9", "SYM11", "SYM8"]
      },
    }

  },
  freespin: {
    reels: [
      ["SYM3", "SYM3", "SYM3", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM4", "SYM4", "SYM4", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM5", "SYM5", "SYM5", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM6", "SYM6", "SYM6", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"],
      ["SYM7", "SYM7", "SYM7", "SYM0", "SYM9", "SYM3", "SYM4", "SYM5", "SYM6", "SYM7", "SYM8", "SYM1", "SYM10", "SYM11", "SYM12"]
    ],
    initial: {
      0: {
        position: 0,
        symbols: ["SYM7", "SYM8", "SYM11"]
      },
      1: {
        position: 0,
        symbols: ["SYM3", "SYM12", "SYM8"]
      },
      2: {
        position: 0,
        symbols: ["SYM9", "SYM5", "SYM7"]
      },
      3: {
        position: 0,
        symbols: ["SYM10", "SYM4", "SYM12"]
      },
      4: {
        position: 0,
        symbols: ["SYM9", "SYM11", "SYM8"]
      },
    }

  }

};

