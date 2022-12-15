const stringLength = require("./stringLength");

test('"Hello" string length is 5', () => {
  // Arrange
  const str = "Hello";
  const verifyResult = 5;

  // Act
  const result = stringLength(str);

  // Assert
  expect(result).toBe(verifyResult);
});

test('Empty string returns an error', () => {
  // Arrange
  const str = "";
  const verifyResult = "String length must be between 1 and 10 both inclusive";

  // Act
  const returnFunction = () => {
    stringLength(str);
  }

  // Assert
  expect(() => {returnFunction()}).toThrow(verifyResult);
});