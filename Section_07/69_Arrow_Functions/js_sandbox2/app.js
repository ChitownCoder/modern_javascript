// const sayHello = function () {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One line return
// const sayHello = () => "Hello";

// Same as above
// const sayHello = function () {
//   return "Hello";
// };

// Return Object
// const sayHello = () => ({
//   msg: "Hello",
// });

// Single param does not need parentheses
// const sayHello = (name) => console.log(`Hello ${firstName}`);

// Multiple params need parentheses
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Tony", "GoofOff");

//
const users = ["Nathan", "John", "William"];

// const nameLengths = users.map(function (name) {
//   return name.length;
// })

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// shortest
const nameLengths = users.map((name) => name.length);

console.log(nameLengths);
