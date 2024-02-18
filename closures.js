/*
A closure is a combination of the function that is enclosed with lexiccal environment of parent.
A closure gives you an access to the outer function's scope from an inner function.
 In JavaScript, closures are created every time a function is created, at function creation time.
*/
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     //?? displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   return displayName;
// }
// let innerFunction = init();
// innerFunction();

// Example 2

// function makeAdder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// !! Uses of Closures

/*
Languages such as Java allow you to declare methods as private,
meaning that they can be called only by other methods in the same class.
JavaScript, prior to classes, didn't have a native way of declaring private methods,
but it was possible to emulate private methods using closures. 
Private methods aren't just useful for restricting access to code.
They also provide a powerful way of managing your global namespace.
*/

// ?? private methods using closures access

// !! closure scope chain

/*
Every closure has three scopes:
Local scope (Own scope)
Enclosing scope (can be block, function, or module scope)
Global scope
*/

// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20

// https://roadsidecoder.hashnode.dev/closures-javascript-interview-questions

// find the output

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, i * 1000); // 3 3 3 after 0 , 1, 2 seconds
// }

// ** Explanation: Here, the i variable is a global variable, and it is being referenced in memory as
// ** a single variable. Till the setTimeout completes, i becomes 3, and setTimeout picks the value
// ** from current execution context and executes it 3 times. as i=3, it is printed thrice.

// need 0 1 2 as output

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); // What is logged?
//   }, i * 1000); // 0 1 2 after 0 , 1, 2 seconds
// }

// ** Explanation: Here, the i variable is a block scope variable, and it is being referenced in memory as
// ** a three different block variable. Till the setTimeout completes, it executes the individual block
// ** and prints 0 1 2 {i=0},{i=1},{i=2}

//convert the same output using var

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, i * 1000); // 0 1 2 after 0 , 1, 2 seconds
//   }
//   inner(i);
// }
// ** Explanation: Using closure, convert the global scope variable i to local scope (functional scope)

// advantages of closure:
// 1. simulate private variables inside function
// 2. memoization
// 3. currying
// 4. function run once
// 5. module design pattern

// !! Example of memoization

function addNumbers(a, b, c) {
  return a + b + c;
}

const add = memoize(addNumbers);

console.log(add(1, 2, 3));
console.log(add(1, 2, 3));

function memoize(fn) {
  const cache = {};
  // This is a closure...
  return function (...args) {
    const stringOfArgs = JSON.stringify(args);
    if (cache[stringOfArgs]) {
      console.log("value already present, fetching it from cache");
      return cache[stringOfArgs];
    }
    console.log("value not present, calculating it ..");
    const result = fn.apply(this, args);
    cache[stringOfArgs] = result;
    return result;
  };
}
