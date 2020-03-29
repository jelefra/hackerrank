const solveMeFirst = require("./katas/001-easy-solve-me-first");
const simpleArraySum = require("./katas/002-easy-simple-array-sum");
const compareTriplets = require("./katas/003-easy-compare-the-triplets");
const aVeryBigSum = require("./katas/004-easy-a-very-big-sum");
const diagonalDifference = require("./katas/005-easy-diagonal-difference");
const plusMinus = require("./katas/006-easy-plus-minus");
const staircase = require("./katas/007-easy-staircase");
const timeInWords = require("./katas/008-medium-the-time-in-words");
const extraLongFactorials = require("./katas/009-medium-extra-long-factorials");
const gradingStudents = require("./katas/010-easy-grading");

describe("Katas solutions", () => {
  it("001", () => {
    expect(solveMeFirst(2, 3)).toEqual(5);
    expect(solveMeFirst(1000, 100)).toEqual(1100);
  });

  it("002", () => {
    expect(simpleArraySum([1, 2, 3, 4, 10, 11])).toEqual(31);
  });

  it("003", () => {
    expect(compareTriplets([5, 6, 7], [3, 6, 10])).toEqual([1, 1]);
  });

  it("004", () => {
    expect(
      aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
    ).toEqual(5000000015);
  });

  it("005", () => {
    expect(
      diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
      ])
    ).toEqual(15);
  });

  it("008", () => {
    expect(timeInWords(5, 47)).toEqual("thirteen minutes to six");
    expect(timeInWords(3, 0)).toEqual("three o' clock");
  });

  it("010", () => {
    expect(gradingStudents([4, 73, 67, 38, 33])).toEqual([4, 75, 67, 40, 33]);
  });
});
