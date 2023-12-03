//Spread
/*
Use to split up array or object properties.
const old=[1,2,3,4,5,6,7,8,9]
const new=[...old,5]
*/

//Rest

/*
It is used to merge a list of function arguments into an array. 
function demo(...agrs){

}
*/

//Spread

const oldArray = [1, 2, 3, 4, 5];
const haha = [2, 23, 23, 2, 3, 23];
const newArray = ["Atullya", ...oldArray, ...haha, 6, 7, 8, 9, 10];
console.log(newArray);

// rest
// To understand rest we need to known about function

const sum = (a, b, c, d) => a + b + c + d;

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

//The above sum function can take only 4 arguemnts

//In order to infinite argu from user we use rest ie
//Here we made numbers array that can accpet infinte amnt of argument
const sum1 = (...numbers) => {
    //For sum
    let total=0;
    numbers.forEach((n)=>{
        total=total+n;
    })
    console.log(total);
};
sum1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10);
