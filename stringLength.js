function stringLength(str) {
  if (str.length < 1 || str.length > 10) {
    throw "String length must be between 1 and 10 both inclusive";
  }

  return str.length;
}
module.exports = stringLength;