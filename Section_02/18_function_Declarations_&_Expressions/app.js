//  FUNCTION DECLARATION

function greet(firstName = "John", lastName = "Doe") {
  //   console.log("Hello");
  return "Hello " + firstName + " " + lastName;
}

// console.log(greet());

// FUNCTION EXPRESSION

const square = function (x) {
  return x * x + " ";
};

// console.log(square(8));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSION - IIFES

// (function () {
//   console.log("IFFIE Ran..");
// // })();

// (function (name) {
//   console.log(" Hello " + name);
// })("Tony");

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log("Add todo..");
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  },
};

todo.delete = function () {
  console.log("Delete todo...");
};

todo.add();
todo.edit(22);
todo.delete();
