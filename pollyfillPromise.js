// !! Promise.all
// It will return a promise, if all are resolved, returns resolve state, if any of them is rejected, returns only the rejected
const dummyPromise = (time) => {
  return new Promise((resolve, reject) => {
    reject(time);
  }, time);
};
const dummyPromiseResolve = (time) => {
  return new Promise((resolve, reject) => {
    resolve(time);
  }, time);
};

// const listOfPromises = [dummyPromise(1000), dummyPromise(2000), dummyPromise(3000)];

// promisePollyfill = (listOfPromises) => {
//   return new Promise((resolve, reject) => {
//     const output = [];
//     listOfPromises.forEach((promise, index) => {
//       promise
//         .then((data) => {
//           output.push(data);
//           //IF its the last element resolve the outermost promise
//           if (index == listOfPromises.length - 1) resolve(output);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };

// promisePollyfill(listOfPromises)
//   .then((res) => {
//     console.log(`the output is ${res}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// !! Promise.race
// It will return a first promise, that is rejected or resolved
// const dummyPromise = (time) => {
//   return new Promise((resolve, reject) => {
//     resolve(time);
//   }, time);
// };

// const listOfPromises = [1, dummyPromise(500), dummyPromise(3000)];

// promisePollyfillRace = (listOfPromises) => {
//   return new Promise((resolve, reject) => {
//     listOfPromises.forEach((promise, index) => {
//       //Promise.resovle is converting a number into a promise
//       Promise.resolve(promise)
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     });
//   });
// };

// promisePollyfillRace(listOfPromises)
//   .then((res) => {
//     console.log(`the output is ${res}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.race(listOfPromises).then((res) => {
//   console.log(`result is ${res}`);
// });

// !! Promise.any
// const listOfPromises = [dummyPromise(500), dummyPromise(3000), 1];

// promisePollyfillAny = (listOfPromises) => {
//   return new Promise((resolve, reject) => {
//     let counter = 0;
//     let errors = [];
//     listOfPromises.forEach((promise, index) => {
//       //Promise.resovle is converting a number into a promise
//       Promise.resolve(promise)
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((err) => {
//           counter++;
//           errors[index] = err;
//           if (counter === listOfPromises.length) reject(errors);
//         });
//     });
//   });
// };

// promisePollyfillAny(listOfPromises)
//   .then((res) => {
//     console.log(`the output is ${res}`);
//   })
//   .catch((err) => {
//     console.log(`err is ${err}`);
//   });

// !! Promise.allSettled
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 resolved");
//   }, 1000);
// });

// const promise2 = Promise.resolve("Promise 2 resolved");

// const promise3 = 8;

// function myPromiseAllSettled(promisesArr) {
//   let wrappedPromises = promisesArr.map((promise) =>
//     Promise.resolve(promise)
//       .then((val) => ({ status: "fulfilled", value: val }))
//       .catch((err) => ({ state: "rejected", reason: err }))
//   );
//   console.log("output is :: ", wrappedPromises);
//   return Promise.all(wrappedPromises);
// }
// const promiseAllSettled = myPromiseAllSettled([dummyPromise(500), dummyPromise(3000), 1]);
// promiseAllSettled.then((res) => console.log(res));
// [
//   { status: "fulfilled", value: "Promise 1 resolved" },
//   { status: "fulfilled", value: "Promise 2 resolved" },
//   { status: "fulfilled", value: 8 },
// ];
