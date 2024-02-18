/*
currying is a advanced function technique of conversion of function which accepts multiple arguments, into
a mutiple function taking single argument at a time.
It converts a function(a,b,c) into function(a)(b)(c)
Currying doesnot call a function, but transforms the function. This is acheived with help of closures.
where every nested function is a closure, has an access to parents lexical environment.
*/

// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(1, 2, 3));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(1)(2)(3));

// Advantages of currying:
/*
1. makes code more readable
2. reduces the chances of error, by divinding into multiple functions each with one responsibility.
3. helps in create higher order function
4. It helps us to avoid passing the same variable multiple times
*/

//!! implement infinite currying
// Infinite currying is a concept, where in you need to continously add the arguments, till they are empty.

//ex: sum(1)(2)(3)(4)() --> op=10

/*output:
1---2
3---3
6---4
10---undefined
10
*/

// function sum(a) {
//   return function (b) {
//     console.log(a + "---" + b);
//     if (!b) {
//       return a;
//     }
//     return sum(a + b);
//   };
// }
// console.log(sum(1)(2)(3)(4)());

// !! Interesting question:

// const ARGS_LEN = 5;

// function sum(...args) {
//   if (args.length == ARGS_LEN) {
//     return getSum(args);
//   } else {
//     return function (...args2) {
//       return sum(...args, ...args2);
//     };
//   }
// }

// function getSum(args) {
//   let sum = 0;
//   for (let elem of args) {
//     sum += elem;
//   }
//   return sum;
// }

// output of all of the below is 15

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(1)(2, 3, 4, 5));
// console.log(sum(1, 2, 3, 4)(5));
// console.log(sum(1)(2, 3)(4, 5));
// console.log(sum(1)(2)(3)(4)(5));
