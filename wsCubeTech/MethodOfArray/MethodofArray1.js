/*
pop() => Removes the last element of an array
push() => Add a new element at the end
reverse() => Sort elements in descending order
shift()=> Remove the first element of an array
slice()=> Pulls a copy of a portion of an array into a new array

*/

var fruits = ["Manga", "Apple", "Pineapple", "Banana"];
var demo = fruits;
document.getElementById("res").innerText = demo;

function pop() {
  demo.pop();
  document.getElementById("res").innerText = demo;
}
function push() {
  var x = prompt("Please Enter a fruit", "");
  demo.push(x);
  //   demo.push("Orange", "Watermelon");
  document.getElementById("res").innerText = demo;
}

function slice() {
  var x = demo.slice(2);
  document.getElementById("res").innerText = x;
}

function reverse() {
  demo.reverse();
  document.getElementById("res").innerText = demo;
}

function shift() {
  var x = demo.shift(1);
  document.getElementById("res").innerText = x;
}
