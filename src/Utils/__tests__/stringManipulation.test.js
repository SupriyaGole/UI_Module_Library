import {findLongestBorderLength} from "../stringManipulation";

describe("findLongestBorderLength", () => {
  test("should return longest border length, which has at least 3 occurrences in string", () => {
    expect(findLongestBorderLength("barbararhubarb")).toEqual(1);
    expect(findLongestBorderLength("ababab")).toEqual(2);
    expect(findLongestBorderLength("baaab")).toEqual(0);
    expect(findLongestBorderLength("barbarbarbarbar")).toEqual(3);
    expect(findLongestBorderLength("barbbarbbarb")).toEqual(4);
  });
});
