// Classes are a template for creating objects. They encapsulate data with code to work on the data. It is Special Function

class Person {
  constructor(uName, uAge) {
    this.name = uName;
    this.age = uAge;
  }

  details() {
    console.log(`The age of ${this.name} is ${this.age}`);
  }
}

const p = new Person("John", "20");
p.details();

const q = new Person("Atullya", "20");
q.details();
