// Using ES5
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Atullya"));

// Using ES6

let greet1 = (name) => {
  return "Hello1 " + name;
}; // if we make arrow functino we must end it with semicolon

console.log(greet1("Atullya1"));

// const Sqr = (num) => {
//   return num * num;
// };

// or;

const Sqr = (num) => num * num;
console.log(Sqr(7));
