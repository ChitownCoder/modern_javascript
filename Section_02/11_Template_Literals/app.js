const myName = "Tony";
const age = 23;
const job = "Web Developer";
const city = "Waterman";

// Without template strings (es5)
html =
  "<ul><li>Name: " +
  myName +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

function hello() {
  return "hello";
}

// With template literals (es6)
html = `
  <ul>
  <li>Name: ${myName}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>

<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? "Over 30" : "Under 30"}</li>
  </ul>
  `;

document.body.innerHTML = html;
