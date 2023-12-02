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
li.setAttribute('data-counter',counter);
li.innerHTML='<b>Sentence</b>' + counter
if(counter%2==0){

    li.setAttribute('class', 'red');
}else{
    li.setAttribute('class','yellow')
}
  //append that element
  ulElement.appendChild(li);


}
function decrementCounter() {
    if (counter > 0) {
        const li = ulElement.querySelector('[data-counter="' + counter + '"]');
        const number=parseInt(li.getAttribute('data-counter'),10)
        if(number%2==0){

            li.remove();
        }
        
        counter--;
        counterEl.innerText = counter;
    }
}


incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
