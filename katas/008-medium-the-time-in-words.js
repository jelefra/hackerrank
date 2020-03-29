// https://www.hackerrank.com/challenges/the-time-in-words/problem

function timeInWords(h, m) {
  const numberToString = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eight",
    29: "twenty nine"
  };
  if (m === 0) {
    return `${numberToString[h]} o' clock`;
  }
  if (m === 1) {
    return `one minute past ${numberToString[h]}`;
  }
  if (m === 15) {
    return `quarter past ${numberToString[h]}`;
  }
  if (m < 30) {
    return `${numberToString[m]} minutes past ${numberToString[h]}`;
  }
  if (m === 30) {
    return `half past ${numberToString[h]}`;
  }
  if (m === 45) {
    return `quarter to ${numberToString[h + 1]}`;
  }
  if (m === 59) {
    return `one minute to ${numberToString[(h + 1) % 12]}`;
  }
  if (m > 30) {
    return `${numberToString[60 - m]} minutes to ${
      numberToString[(h + 1) % 12]
    }`;
  }
}

module.exports = timeInWords;
