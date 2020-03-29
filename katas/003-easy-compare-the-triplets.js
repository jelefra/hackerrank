// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  return a.reduce(
    (comparisonArray, currentValue, index) => {
      if (currentValue > b[index]) {
        comparisonArray[0] += 1;
      }
      if (currentValue < b[index]) {
        comparisonArray[1] += 1;
      }
      return comparisonArray;
    },
    [0, 0]
  );
}

module.exports = compareTriplets;
