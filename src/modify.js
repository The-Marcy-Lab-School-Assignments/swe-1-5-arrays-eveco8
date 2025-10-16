const uppercaseAll = (...words) => {
  return words.map(word => word.toUpperCase())

};

const destructureCoordinates = ([x, y]) => {
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
