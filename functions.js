const sum = (a, b) => {
  // try {
  //   if (typeof a === "string" || typeof b === "string") {
  //     throw new Error("error");
  //   }
  //   return a + b;
  // } catch (error) {
  //   return error.message;
  // }
  return a + b;
};

const reverseCase = (text) => {
  let newText = "";
  for (let char of text) {
    if (char == char.toLowerCase()) {
      newText += char.toUpperCase();
    } else {
      newText += char.toLowerCase();
    }
  }
  return newText;
};

const objToArray = (obj) => {
  let newArrayOfObj = [];
  for (let key in obj) {
    newArrayOfObj.push({ key: key, value: obj[key] });
  }
  return newArrayOfObj;
};

const reverseArray = (array) => {
  // let newArray = [];
  // for (let i = array.length - 1; i >= 0; i--) {
  //   newArray.push(array.pop());
  // }
  // return newArray;
  return array.reverse();
};

const duplicates = (array) => {
  let newArr = array.filter((value, index) => {
    return array.indexOf(value) === index;
  });
  return newArr;
};

module.exports = {
  sum,
  reverseCase,
  objToArray,
  reverseArray,
  duplicates,
};
