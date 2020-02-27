module.exports = function toReadable(number) {
  var resultString = '';
  var tensNames = [
    "",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  var numNames = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];


  if (number == 0)
    return numNames[number];

  return convertNumber(resultString, number);

  function convertNumber(result, passedNumber) {
    if (passedNumber < 20) {
      if (passedNumber == 0) {
        return result.trim();
      }
      return (result + numNames[passedNumber]).trim();
    }

    if (passedNumber < 100) {
      result += tensNames[(passedNumber / 10 | 0)];
      return convertNumber(result + ' ', (passedNumber % 10));
    }
    else {
      result += numNames[(passedNumber / 100 | 0)] + ' hundred';
      return convertNumber(result + ' ', (passedNumber % 100));
    }
  }
}
