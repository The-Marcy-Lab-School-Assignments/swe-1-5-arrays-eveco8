const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true) {
    arr.unshift(value)
  } else {
    arr.push(value)
  }
  return
};

const reverseString = (str) => {
  return str.split('').reverse().join('')
};

const newArrayFullOf = (value, numOfValue) => {
  let arr = new Array(numOfValue)
  return arr.fill(value)
};

const insertIntoMiddle = (arr, value) => {
  let middle = Math.floor(arr.length / 2)
  return arr.splice(middle, 0, value)
};

const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length / 2)
  return arr.splice(middle, 1)
};

const isRightIndex = (arr, value, index) => {
  if (arr[index] === value) {
    return true
  } else {
    return false
  }
};

const roundAllNumsDown = (arr) => {
  let newarr = []
  for (i = 0; i < arr.length; i++) {
    let roundedNum = Math.floor(arr[i])
    newarr.push(roundedNum)
  }
  return newarr
};

const getAllYCoordinates = (arrOfcoords) => {
  return arrOfcoords.map(ycoords => ycoords[1])
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
