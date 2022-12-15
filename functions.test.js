const functions = require("./functions.js");

test('"Hello" string length is 5', () => {
  // Arrange
  const str = "Hello";
  const verifyResult = 5;

  // Act
  const result = functions.stringLength(str);

  // Assert
  expect(result).toBe(verifyResult);
});

test('Empty string returns an error', () => {
  // Arrange
  const str = "";
  const verifyResult = "String length must be between 1 and 10 both inclusive";

  // Act
  const returnFunction = () => {
    functions.stringLength(str);
  }

  // Assert
  expect(() => {returnFunction()}).toThrow(verifyResult);
});

test('String returns reverse string', () => {
  // Arrange
  const str = "Hello";
  const verifyResult = "olleH";

  // Act
  const result = functions.reverseString(str);

  // Assert
  expect(result).toEqual(verifyResult);
});

describe("Testing the object of a calculator class", () => {
  test("Adding two numbers:", ()=>{
    // Arrange
    const num1 = 5;
    const num2 = 5;
    const obj = new functions.Calculator(num1, num2);
    const verifyResult = 10;

    // Act
    const result = obj.add();

    // Assert
    expect(result).toEqual(verifyResult);
  })

  test("Subtracting two numbers:", ()=>{
    // Arrange
    const num1 = 5;
    const num2 = 5;
    const obj = new functions.Calculator(num1, num2);
    const verifyResult = 0;

    // Act
    const result = obj.subtract();

    // Assert
    expect(result).toEqual(verifyResult);
  })

  test("Dividing two numbers:", ()=>{
    // Arrange
    const num1 = 5;
    const num2 = 5;
    const obj = new functions.Calculator(num1, num2);
    const verifyResult = 1;

    // Act
    const result = obj.divide();

    // Assert
    expect(result).toEqual(verifyResult);
  })
})

test("Testing string capitalize function:", ()=>{
  // Arrange
  const num = 5;
  const verifyResult = "Please enter a string";

  // Act
  const returnFunction = () => {
    functions.capitalize(num);
  }

  // Assert
  expect(() => {returnFunction()}).toThrow(verifyResult);
})

test("Testing string capitalize function:", ()=>{
  // Arrange
  const str = "hello";
  const verifyResult = "Hello";

  // Act
  const result = functions.capitalize(str);

  // Assert
  expect(result).toEqual(verifyResult);;
})


