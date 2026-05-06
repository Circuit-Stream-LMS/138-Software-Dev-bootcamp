module.exports = {
  // ============================================================
  // Basic Arithmetic Operations
  // ============================================================

  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  },

  // ============================================================
  // Advanced Math Operations
  // ============================================================

  power: function (base, exponent) {
    return Math.pow(base, exponent);
  },

  squareRoot: function (number) {
    if (number < 0) {
      throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(number);
  },

  absolute: function (number) {
    return Math.abs(number);
  },

  // ============================================================
  // Array Operations
  // ============================================================

  sum: function (array) {
    if (!Array.isArray(array)) {
      throw new Error("Input must be an array");
    }
    return array.reduce((acc, val) => acc + val, 0);
  },

  average: function (array) {
    if (!Array.isArray(array) || array.length === 0) {
      throw new Error("Input must be a non-empty array");
    }
    const total = array.reduce((acc, val) => acc + val, 0);
    return total / array.length;
  },

};
