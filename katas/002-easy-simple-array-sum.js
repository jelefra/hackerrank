// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  return ar.reduce((sum, value) => (sum += value));
}

module.exports = simpleArraySum;
