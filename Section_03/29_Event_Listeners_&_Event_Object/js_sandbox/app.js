// document.querySelector(".clear-tasks").addEventListener("click", function (e) {
//   console.log("Hello world");

document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  //   console.log("Clicked");

  let val;

  val = e;

  //   Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = "Hello";

  //   Event type
  val = e.type;

  //   TimeStamp
  val = e.timeStamp;

  //   Coord event relative to the window
  val = e.clientY;
  val = e.clientX;

  //   Coord event relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
  e.preventDefault();
}
