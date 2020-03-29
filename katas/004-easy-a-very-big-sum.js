// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  return ar.reduce((sum, currentValue) => (sum += currentValue));
}

module.exports = aVeryBigSum;
