const findBorders = (input) => {
  const iteratorLimit = Math.floor(input.length / 3);
  let borders = [];
  let start = 0;
  for (let i = 0; i < iteratorLimit; i++) {
    const reducer = i + 1;
    let end = input.length - reducer;
    const startLetter = input.substr(start, reducer);
    const endLetter = input.substr(end, reducer);
    if (startLetter === endLetter) {
      borders.push(startLetter);
    }
  }
  return borders;
};

export const findLongestBorderLength = (input) => {
  const borders = findBorders(input);
  let maxBorder = "";
  for (let i = 0; i <borders.length; i++) {
    const regex = new RegExp(borders[i], "g");
    if((input.match(regex) || []).length >=3) {
      maxBorder = borders[i];
    }
  }
  return maxBorder.length;
};

console.log("barbararhubarb::", findLongestBorderLength("barbararhubarb"));
console.log("ababab::", findLongestBorderLength("ababab"));
console.log("baaab::", findLongestBorderLength("baaab"));
console.log("barbarbarbarbar::", findLongestBorderLength("barbarbarbarbar"));
console.log("barbbarbbarb::", findLongestBorderLength("barbbarbbarb"));
