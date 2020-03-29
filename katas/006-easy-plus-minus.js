// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const accumulator = arr.reduce(
    (accumulator, currentValue) => {
      if (currentValue > 0) {
        accumulator.countOfPositive++;
      } else if (currentValue < 0) {
        accumulator.countOfNegative++;
      } else if (currentValue === 0) {
        accumulator.countOfZero++;
      }
      return accumulator;
    },
    { countOfPositive: 0, countOfNegative: 0, countOfZero: 0 }
  );

  console.log(
    ["countOfPositive", "countOfNegative", "countOfZero"]
      .map(category => (accumulator[category] / arr.length).toFixed(6))
      .join("\n")
  );
}

module.exports = plusMinus;
