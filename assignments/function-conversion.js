// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => console.log('Function was invoked!');
myFunction();
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = (param) => param;
console.log(anotherFunction('Hello!'));
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => param1 + param2;
console.log(add(2084,487));
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(10, 2));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);
numArray=[1,2,3,4,5,6,7];
const triple = (arr) => arr.map(num => num * 3);
console.log(triple(numArray));