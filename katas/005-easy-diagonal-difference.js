// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  const iterator = arr.length;
  let difference = 0;
  for (let i = 0; i < iterator; i++) {
    difference += arr[i][i] - arr[i][iterator - i - 1];
  }
  return Math.abs(difference);
}

module.exports = diagonalDifference;
