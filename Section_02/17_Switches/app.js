const color = "yellow";

switch (color) {
  case "red":
    console.log("Color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
    day = "Monday";
    break;
    day = "Tuesday";
    break;
    day = "Wednesday";
    break;
    day = "Thursday";
    break;
    day = "Friday";
    break;
    day = "Saturday";
    break;
}

console.log(`Today is ${day}`);
