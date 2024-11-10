/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  const stack = [];
  const matches = {
    AB: "AB",
    CD: "CD",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const len = stack.length - 1;

    if (stack[len] === undefined) {
      stack.push(char);
    } else {
      const lastItem = stack[len];

      if ((lastItem + char) in matches) {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
  }
  return stack.length;
};

minLength("ABFCACDB");
minLength("ACBBD");
