/* List of Method
1. valueOf()  =>To print the data of array.
2. isArray() =>Check if the variable is an array or not?
3. concat() =>JOin several array into one
4. indexOf() =>Returns the primitive value of the specified object
5. join() =>Comibe elements of an array into a single string and return the string

*/

var fruits = ["Manga", "Apple", "Pineapple", "Banana"];
var vegetables = ["Potato", "Carrot", "Raddish", "Cucumber"];

var shop = fruits.concat(vegetables);
document.write("<h1>" + shop + "</h1>");
var index = shop.indexOf("Apple");
document.write("<h1>" + index + "</h1>");

// var flag = Array.isArray(fruits);
// var flag = fruits.valueOf();
// var flag=fruits.join("|"); // determie formatting

// document.write("<h1>" + flag + "</h1>");
