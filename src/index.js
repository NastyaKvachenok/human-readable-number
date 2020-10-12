
module.exports = function toReadable (number) {
  let array1 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let array2 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let humanReadableNumber = '';
  if (number === 0) {
    return "zero";
  }
  function getNumberToWord(number) {
    
    if (number < 20) {
      humanReadableNumber = humanReadableNumber + array1[number];
      return humanReadableNumber;
    }

    if (number < 100) {
      let x = Math.floor(number/10);
      humanReadableNumber = humanReadableNumber + array2[x] + " ";
      return getNumberToWord(number - x * 10);
    }

    if (number < 1000) {
      x = Math.floor(number/100);
      humanReadableNumber = humanReadableNumber + array1[x] + " hundred" + " ";
      return getNumberToWord(number - x * 100);
    }
  }

  return getNumberToWord(number).trim();
}
