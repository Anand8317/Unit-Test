function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    throw "String length must be between 1 and 10 both inclusive";
  }

  return str.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
}

function capitalize(string) {
  if (typeof(string) !== "string") {
    throw "Please enter a string";
  }
  const newString = string[0].toUpperCase() + string.slice(1);
  return newString;
}

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize
};