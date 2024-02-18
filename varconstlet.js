/*
Traditionally (before ES6), JavaScript only had two kinds of scopes: 
1. function scope 
2.global scope.
 Variables declared with var are either function-scoped or global-scoped,
 depending on whether they are declared within a function or outside a function. 
This can be tricky, because blocks with curly braces do not create scopes:
*/
// const isTrue = false;
// if (isTrue) {
//   var x = 10; // Here x is in global scope
// } else {
//   var x = 20;
// }
// //console.log(x);

// function hi() {
//   var xy = 30; // here xy is function scoped, as it is defined inside the function
//   console.log("x value inside the function is " + xy);
// }
// hi();
// console.log(xy);
// console.log(x);

// !! let or const

/*
1. In ES6, JavaScript introduced the let and const declarations,
which, among other things like temporal dead zones,
allow you to create block-scoped variables.
2. 
*/
//global scope
// const x = 10;
// if (Math.random() > 0.5) {
//   const y = 1;
// } else {
//   const y = 2;
//   // Here y is block scoped
// }
// console.log(x);

// const user = {
//   name: "mudu",
//   age: 19,
// };
// const key = "age";
// console.log(user.age);
// console.log(user["age"]);
// console.log(user[key]);

// const user = {
//   name: "muddu",
//   age: 10,
//   course: "CST",
// };

// const { cast, name: userName, age, gender } = user;
// console.table([userName, age, gender, cast]);

// // calculate sum of the arguments passed to a function

// function add(...parameters) {
//   const arr = parameters;
//   let sum = 0;
//   for (let a of arr) {
//     sum += a;
//   }
//   console.log(sum);
// }

// add(5);
// add(1, 5);
// add(1, 4, 5);
// add(9, 8, 7, 6, 5, 19);

// const arr1 = [1, 2, 3, 4];

// const newarray = [9, 8, 7, ...arr1];

// console.log(newarray);

// const add = (a, b) => {
//   console.log(a + b);
// };

// add(1, 2);

// const add = (a) => {
//   console.log(this);
// };

// add(1);

// const shop = {
//   name: "muddu",
//   age: 10,
//   purchase: () => {
//     console.log(this.name + " ");
//   },
// };

// shop.purchase();

// function print() {
//   console.log(arguments);
// }
// print("hello", 400, false);

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: function () {
//     console.log(this);
//   },
// };

// obj.print();

// const obj = {
//   name: "deeecode",
//   age: 200,
//   print: function () {
//     function print2() {
//       console.log(this);
//     }

//     print2();
//   },
// };

// obj.print();

var obj = {
  name: "vivek",
  getName: function () {
    console.log(this.name);
  },
};

var getName = obj.getName;

var obj2 = { name: "akshay", getName };
obj2.getName();

const arr = [1, 2, 3, 4, 5];
//splice returns deleted elements, and also it modifies the original array
// const deleted = arr.splice(2, 3);
// console.log(deleted);
// console.log(arr);
// const newarray = [...arr, ...deleted];

// console.log(newarray);
// slice returns new array of selected elements, without modifying the original arraay
const newArray = arr.slice(1, 4);
console.log(arr);
console.log(newArray);
