const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = "Hello there my name is Tony";
const tags = "web design, web development, programming";

let value;

val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "Tony ";
val += "ChitownCoder";

val = " Hello, my name is " + firstName + " and I am " + age;

// Escaping
val = "That's awesome, I can't wait";
val = "That's awesome, I can't wait";

// Length
val = firstName.length;

// Concat
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toLocaleUpperCase();
val = lastName.toLocaleLowerCase();

val = firstName[0];

// indexOf
val = firstName.indexOf("l");
val = firstName.lastIndexOf("l");

// charAt()
val = firstName.charAt("2");

// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split()
val = str.split(" ");
val = tags.split(",");

// replace()
val = str.replace("Tony", "Anthony");

// includes()
val = str.includes("Hello");

val = console.log(val);
