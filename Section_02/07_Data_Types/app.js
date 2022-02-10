//? ***********  Primitive Data Types: ***********/
//* Stored directly in the location the variable accesses stored on the stack
/**
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * Symbols(ES6)
 */
//? *********** Reference Data Types: ***********/
//* Accessed by the reference
//* Objects that are stored on the heap are stored
//* A pointer to a location in memory
/**
 * Types are associated with values not variables
 * The same variable can hold multiple types
 * We do not need to specify types
 * Most other languages are statically typed(java, C#, C++)
 * There are superset of JS and the addons to allow static typing (TypeScript, FlowJS)
 */
/**
 * Arrays
 * Object Literals
 * Functions
 * Dates
 * Anything Else...
 */

//? *********** CODE BELOW *********** /

//! PRIMITIVE

// STRING
const myName = "John Doe";

//NUMBER
const age = 45;

// Boolean
const hasKids = true;

// Null
const car = null;

// Undefined
let test;

// Symbol
const sym = Symbol();

// REFERENCE TYPE - Objects

// Array
const hobbies = ["Movies", "Music"];

// Object Literal
const address = {
  city: "Chicago",
  state: "Illinois",
};

// Date
const today = new Date();
console.log(today);

console.log(typeof today);
