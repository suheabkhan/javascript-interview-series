//!!promise is an object that represents eventual completion of an asynchronous event, resulting in success value or failure value.
//!!3 states: pending-> initial, resolve-> success,reject->  failure
//!!asynchronous code: not line by line execution, executes the code which is present in the call stack/execution stack, then get the code from call back queue with help of eventloop and puts it in the execution stack and then gets executed.

//asynchronous code

// console.log("start");

// function importantAction(username, cb) {
//   setTimeout(() => {
//     cb(`Subscribe to subbu`);
//   }, 1000);
// }

// importantAction("suheab", function (message) {
//   console.log(message);
// });
// console.log("end");

//!!Note: whenever we have asyncrhonous code, attach a callback to it if you want the asynchronous nature. Here whenever setTimeout completes, callback is invoked.

//?? asynchronous code with multiple functions

//console.log("start");

// function watchVideo(cb) {
//   setTimeout(() => {
//     cb(`watched js callback hell video`);
//   }, 2000);
// }
// function likeVideo(cb) {
//   setTimeout(() => {
//     cb(`liked js callback hell video`);
//   }, 500);
// }
// function shareVideo(cb) {
//   setTimeout(() => {
//     cb(`shared js callback hell video`);
//   }, 1000);
// }

// function callback(message) {
//   console.log(message);
// }

// !!This will not call all the functions synchronously, but depending on the timwout delay of above functions.
// watchVideo(function (message) {
//   console.log(message);
// });
// likeVideo(callback);
// shareVideo(function (message) {
//   console.log(message);
// });

// ?? callback hell
//!!incase if there is an dependency, where we need to execute, the functions in order, then need to use callbacks

// console.log("start");

// function watchVideo(cb) {
//   setTimeout(() => {
//     cb(`watched js callback hell video`);
//   }, 2000);
// }
// function likeVideo(cb) {
//   setTimeout(() => {
//     cb(`liked js callback hell video`);
//   }, 500);
// }
// function shareVideo(cb) {
//   setTimeout(() => {
//     cb(`shared js callback hell video`);
//   }, 1000);
// }

// watchVideo(function (message) {
//   console.log(message);
//   likeVideo(function (message) {
//     console.log(message);
//     shareVideo(function (message) {
//       console.log(message);
//     });
//   });
// });
// console.log("end");

// ?? promises

// console.log("start");
// function promiseReturningFunction() {
//   return new Promise((resolve, reject) => {
//     //?? write an asynchronous code here, may be an API call or something else
//     setTimeout(() => {
//       const result = true;
//       if (result) resolve("success");
//       else reject(new Error("failure"));
//     }, 1000);
//   });
// }
// const sub = promiseReturningFunction();
// console.log("pending state", sub);
// sub
//   .then((result) => {
//     console.log("resolve state", sub);
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("reject state", sub);
//     console.log(err);
//   });
// console.log("stop");

//?? can directly resolve or reject the promise
// !! Even if the promise is resolved or rejected directly, still its an asynchronous operation, so after all synchronous code is executed, then only all other code is execued

// console.log("start");
// const fullfilled = Promise.resolve("success");
// console.log(fullfilled);
// const rejected = Promise.reject("failure");
// console.log(rejected);
// fullfilled.then((res) => console.log(res));
// rejected.catch((err) => console.log(err));
// console.log("end");

//?? solve asynchronous code with promises

// console.log("start");

// function watchVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`watched js callback hell video`);
//     }, 2000);
//   });
// }
// function likeVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`liked js callback hell video`);
//     }, 500);
//   });
// }
// function shareVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`shared js callback hell video`);
//     }, 1000);
//   });
// }

// console.log("end");
//??No need to pass the call back, just can use then and catch blocks.
//??error handling is required for individual promise
// watchVideo()
//   .then((res) => {
//     console.log(res);
//     likeVideo()
//       .then((res) => {
//         console.log(res);
//         shareVideo()
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//?? The above structure is more less similar to call back hell, so we can use promise chaining to solve the above issue.

//!! promise chaining
// ??can pass the output of one function to the other using return keyword and can apply .then()
//??one catch block catches all the error, but as soon as it encounters any reject, further promises are not executed.
// watchVideo()
//   .then((res) => {
//     console.log("watch video op", res); // ?? return is used to pass the data of the promise to its handler.
//     return likeVideo();
//   })
//   .then((res) => {
//     console.log("like video op", res);
//     return shareVideo();
//   })
//   .then((res) => {
//     console.log("share video op", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function promiseDemo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 1000);
//   });
// }

// promiseDemo()
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((resultOfParent) => {
//     console.log(resultOfParent);
//     return resultOfParent % 2;
//   })
//   .then((resultOfImmediateParent) => {
//     if (resultOfImmediateParent === 0) {
//       throw new Error("Odd Number");
//     }
//     console.log(resultOfImmediateParent);
//   })
//   .catch((err) => {
//     console.log(err);
//  });

// ?? Interesting fact

// const p1 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("P1");
//     resolve();
//   });
// };

// const p2 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("P2");
//     reject();
//   });
// };

// const p3 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("P3");
//     resolve();
//   });
// };

// p1()
//   .catch(() => {
//     console.log("Caught p1");
//   })
//   .then(p2)
//   .catch(() => {
//     console.log("Caught p2");
//   })
//   .then(p3)
//   .catch(() => {
//     console.log("Caught p3");
//   })
//   .then(() => {
//     console.log("Final then");
//   });

// ?? Here first catch is used and after that then block is used, if any time after catch if there is any then block, it will always get executed, even if  there is an error.
// ?? Here ,p2 is rejected, the exeception is caught at catch block of p2, however, there are still .then() blocks, after it.. hence it gets executed..
// ?? If first, then() and catch(), then depending on promise state, only one gets executed.
// const p4 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("P1");
//     resolve("success");
//   });
// };
// p4()
//   .then((res) => {
//     console.log("inisde then", res);
//   })
//   .catch((err) => {
//     console.log("inside err", err);
//   })
//   .finally(() => {
//     console.log("closing finaally");
//   });
// ?? If first, catch() and then(), if rejected, both gets executed, and if resolved only then
// const p5 = () => {
//   return new Promise((resolve, reject) => {
//     console.log("P5");
//     reject("failare");
//   });
// };
// p5()
//   .catch((err) => {
//     console.log("inside err", err);
//   })
//   .then((res) => {
//     console.log("inisde then", res);
//   });

// !! promise combinators

function watchVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`watched js callback hell video`);
    }, 2000);
  });
}
function likeVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`liked js callback hell video`);
    }, 500);
  });
}
function shareVideo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`shared js callback hell video`);
    }, 1000);
  });
}
// !! Promise.all
// ?? It returns array of fullfiled promises if all are resolved, if any one of promise is rejected, then it returns the rejected promise
Promise.all([watchVideo(), likeVideo(), shareVideo()])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("error occured", err);
  });
/**
   * success case::
   * [
  'watched js callback hell video',
  'liked js callback hell video',
  'shared js callback hell video'
]

failuer case error occured liked js callback hell video
   */
// !! Promise.race
// ?? It returns first resolved or rejected promise
// Promise.race([watchVideo(), likeVideo(), shareVideo()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// !! Promise.allSettled
// returns all the promises
// Promise.allSettled([watchVideo(), likeVideo(), shareVideo()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });
/**
 * [
  { status: 'fulfilled', value: 'watched js callback hell video' },
  { status: 'rejected', reason: 'liked js callback hell video' },
  { status: 'fulfilled', value: 'shared js callback hell video' }
]
 */
// !! Promise.any
//returns first resolved promise, if all promises fail then it will give error
// Promise.any([watchVideo(), likeVideo(), shareVideo()])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error occured", err);
//   });

// !! modern way of handling Promises

// const result = async () => {
//   try {
//     const message1 = await watchVideo(); // ?? by default, the function returns promise, but due to the use of await keyword, it waits untill the promise is converted into the object.
//     console.log(message1);
//     const message2 = await likeVideo(); // ?? error handling using try and catch block
//     console.log(message2);
//     const message3 = await shareVideo();
//     console.log(message3);
//   } catch (err) {
//     console.log("an error occured ", err);
//   }
//   // ?? If any promise is reejected, it will enter catch block and any further promises are not executed
// };

// result();

// !! Interview Questions :
// ** 1.
//console.log("start");

// Here although promise is an async code, but there is some sync code that is executed staright forward. so 1 gets printed before end
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

//Here although promise is an async code, inside promise also there is code which is executed after some delay or async .. so end gets printed before 1
// const promise1 = new Promise((resolve, reject) => {
//   console.log(3);s
//   setTimeout(() => {
//     console.log(1);
//     resolve(2);
//   }, 0);
//   console.log(4);
// });

// promise1.then((res) => {
//   console.log(res);
// });

//console.log("end");

// ** 2.
// const orderPizza = (topping) =>
//   new Promise((resolve, reject) => {
//     if (topping === "pepperoni") reject(new Error("No pepperoni available"));
//     else resolve(`${topping} pizza`);
//   });

// const makeToast = () => "toast";
// const eat = (food) => console.log(`eating some ${food}`);

// async function main() {
//   await orderPizza("cheese")
//     .catch((err) => {
//       return makeToast();
//     })
//     .then((res) => {
//       eat(res);
//     });

//   console.log("-----");

//   await orderPizza("pepperoni")
//     .catch((err) => {
//       return makeToast();
//       //returns toast to then() block
//     })
//     .then((res) => {
//       eat(res);
//     });
// }

// main();

// **3.

//console.log("start");

//?? Here although promise is an async code,but it's neither resolved or nor rejcted, so it will not enter into .then() and .catch() block
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// promise1
//   .then((res) => {
//     console.log("result is " + res);
//   })
//   .catch((err) => {
//     console.log("error is " + err);
//   });

// console.log("end");

// ** 4

// const firstPromise = new Promise((resolve, reject) => {
//   resolve("first");
// });

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise
//   .then((res) => {
//     return res; // ?? (Here res contains a promise, and passed to .then(), which will resolve it )
//   })
//   .then((res) => {
//     console.log(res);
//   });

// ** 5 solve promise recuresively

// function watchVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`watched js callback hell video`);
//     }, 2000);
//   });
// }
// function likeVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`liked js callback hell video`);
//     }, 500);
//   });
// }
// function shareVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`shared js callback hell video`);
//     }, 1000);
//   });
// }

// write the implemetation of the below function which takes array of promises and resolves them
// function promiseSolveByRecursion(funPromises) {
//   if (funPromises.length == 0) return;

//   //returns the first promise and modifies the array by removing it
//   const currentPromise = funPromises.shift();

//   currentPromise
//     .then((res) => {
//       console.log(res);
//       //If you want to maintain the order
//       // promiseSolveByRecursion(funPromises);
//     })
//     .catch((err) => {
//       console.log("an error occured at", err);
//     });
//   promiseSolveByRecursion(funPromises);
// }
// promiseSolveByRecursion([watchVideo(), likeVideo(), shareVideo()]);
