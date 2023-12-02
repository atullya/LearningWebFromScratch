const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const counterEl = document.getElementById("counter");

const ulElement = document.getElementById("list-items");

let counter = 0;

function incrementCounter() {
  counter++;
  counterEl.innerText = counter;

  //create a Element
  const li = document.createElement("li");
  const textNode = document.createTextNode("Sentence" + counter);
  li.appendChild(textNode);
  //append that element
  ulElement.appendChild(li);

  /*

  // To make Bold
//   first create a bold element using
  const b=document.createElement('b');
  b.appendChild(textNode);
  li.appendChild(b);
//   and finally
ulElement.appendChild(li);

*/
}
function decrementCounter() {
  counter--;
  counterEl.innerText = counter;
// To remove element we use removeChild
  ulElement.removeChild(ulElement.lastChild);

}

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
