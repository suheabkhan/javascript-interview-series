// ? Array.flat;
const arr = [1, 2, 3, 4, 5, [6, 4, 3, 5, [1, 2, 3]]];
// // !! returns a flatted array
// const flattenedArray = arr.flat(2);
// console.log(flattenedArray);

// Array.prototype.myFlat = function (depth = 1) {
//   let output = [];
//   function flattenedArray(arr, depthVal) {
//     for (let item of arr) {
//       if (Array.isArray(item)) {
//         if (depthVal > 0) flattenedArray(item, depthVal - 1);
//         else output.push(item);
//       } else {
//         output.push(item);
//       }
//     }
//     return output;
//   }
//   const final = flattenedArray(this, depth);
//   return final;
// };
// console.log(arr.myFlat(0));

// flatten an object:

const userDetails = {
  name: "suheab",
  age: 24,
  address: {
    country: "INDIA",
    state: "AP",
    lane: {
      street: "Kothapeta street",
      doorNumber: "13/20",
    },
  },
};
/*
{
  name: 'name',
  age: 'age',
  address_country: 'country',
  address_state: 'state',
  address_lane_street: 'street',
  address_lane_doorNumber: 'doorNumber'
}
// */
// function flattenAnObject(obj, parent, res) {
//   for (let key in obj) {
//     let propName = parent ? parent + "_" + key : key;
//     if (typeof obj[key] == "object") {
//       flattenAnObject(obj[key], propName, res);
//     } else {
//       res[propName] = key;
//     }
//   }
//   return res;
// }
// console.log(flattenAnObject(userDetails, "", {}));

//  ?? Array.filter
// ?? returns an array as output
const arr1 = [1, 2, 3, 4, 5, 6];
// const filteredValues = arr1.filter((elem) => {
//   if (elem % 2 == 0) {
//     return elem;
//   }
// });
// console.log(filteredValues);

//Array.prototype.customFilter = function (isEvenFunction, output = []) {
//   function filterArray(arr) {
//     let filteredValues = [];
//     for (let item of arr) {
//       if (item % 2 == 0) {
//         filteredValues.push(item);
//       }
//     }
//     return filteredValues;
//   }
//   return filterArray(this);
//   this.forEach((item) => {
//     if (isEvenFunction(item)) {
//       output.push(item);
//     }
//   });
//   return output;
// };
// const isEven = (num) => {
//   if (num % 2 == 0) {
//     return true;
//   }
//   return false;
// };
// console.log(arr1.customFilter(isEven));

// !! Array.reduce
// ? reduces the array to single number and sums with default initialised value

// const reducedValue = arr1.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// console.log(reducedValue);

// Array.prototype.customReduce = function (initialValue, callback) {
//   let reducedValue = initialValue;
//   this.forEach((item) => {
//     reducedValue = callback(item, reducedValue);
//   });
//   return reducedValue;
// };

// const sumOfTwoNumbers = function (first, second) {
//   return first + second;
// };

// console.log(arr1.customReduce(6, sumOfTwoNumbers));

// !! Array.map
// returns an array
// const doubledArray = arr1.map((value) => {
//   return value * 2;
// });
// console.log(doubledArray);

// const doublingCallbackFunction = (number) => {
//   return number * 2;
// };

// Array.prototype.customMap = function (callback, output = []) {
//   this.forEach((element) => {
//     output.push(callback(element));
//   });
//   return output;
// };
// console.log(arr1.customMap(doublingCallbackFunction));

// !! custom For each loop

// Array.prototype.customForEach = function (callback) {
//   if(typeof !== 'function') throw new Error("Callback needs to be a function");
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i);
//   }
// };
// const logger = (value, index) => {
//   console.log(`value is :${value} and index is ${index}`);
// };

// arr1.customForEach(logger);
