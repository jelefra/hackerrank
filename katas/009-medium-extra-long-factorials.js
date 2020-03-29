// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
  let result = BigInt(n);
  while (n > 1) {
    result *= BigInt(n - 1);
    n--;
  }
  console.log(String(result));
}

module.exports = extraLongFactorials;
