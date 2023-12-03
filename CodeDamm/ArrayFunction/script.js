const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newMappedArray_forEq = [];

for (let i = 0; i < arr.length; i++) {
  const el = arr[i];

  // do anything you want
  newMappedArray_forEq.push(el ** 2);
}

/*
const newMappedArray=arr.map(function(element){
    console.log(element);
 return element **2 //to square all elements
} )

*/

/* Alternative of above function */

// We can use arrow function
const newMappedArray = arr.map((element) => element ** 2);

const filterArray = arr.filter((element) => element < 5); // It return boolean value

// console.log(arr,newMappedArray)
console.log(arr, filterArray);

// Also
const friends = [
  {
    name: "x",
    age: 15,
  },
  {
    name: "y",
    age: 18,
  },
  {
    name: "z",
    age: 23,
  },
];

const filterArray1 = friends.filter((element) => element.age > 18);
console.log(friends, filterArray1);

//now Find..

const findX = friends.find((friend) => (friend.name = "x"));
console.log(findX);

//again

friends.forEach((friend) => {
  //This doesn't return anything but acts as a for loop kind of
  console.log(friend);
});
