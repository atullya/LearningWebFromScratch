//ES6 //ES2015

const arr1=[1,2,3];
const arr2=[4,5,6];

const arr3=[...arr1,...arr2,"atullya"];
console.log(arr3);



// fOR OBJECTS

const obj1={
    name:'Atullya'
}
const obj2={
    age: 12
}
const obj3={
    ...obj1,
    ...obj2
}
console.log(obj3);