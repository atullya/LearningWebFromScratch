// Destruction makes the assignment of the values of an array or object to the new variable easier

// ES5

/*
var details = {
  name: "Atullya",
  contact: "1234567890",
  email: "atulmzn1@gmail.com",
};
var name = details.name;
var contact = details.contact;
var email = details.email;
console.log(name);
console.log(contact);
console.log(email);
console.log(details);
*/

// ES6
var details = {
  name: "Atullya",
  contact: "1234567890",
  email: "atulmzn1@gmail.com",
};

// let { name, contact, email } = details; //just copying the details to variable
let { name: bro, contact, email } = details; //changing the variable name from name to bro but console.log should be new variable name

console.log(bro);

// console.log(name);
console.log(contact);
console.log(email);

// Other Example for Array

// in es5
const arr = ["A", "B", "c", "d", "e", "F"];
var vl = arr[0];
console.log(vl);

//es6
let [v1, v2, v3, v4] = arr;
console.log(v2);
console.log(v4);
