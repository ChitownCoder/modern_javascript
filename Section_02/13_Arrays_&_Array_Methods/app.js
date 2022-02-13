// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = (22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Orange", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array (simple testing).
val = Array.isArray(numbers);

// Get a single value
val = numbers[3];
val = numbers[0];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// // Mutating Arrays

// // add on to end of array
// numbers.push(250);

// // add on to front of array
// numbers.unshift(120);

// // take off from end of array
// numbers.pop();

// // take off from front of array
// numbers.shift();

// // Slice values
// numbers.splice(1, 3);

// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// // Sorting array
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse Sort
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
