// The map() method creates a new array populated with the results of calling a provided functin on every elements
// in the calling array.

/*
const courses = ["PHP", "ReactJS", "Angular", "JavaScript"];
const newCourses = courses.map((c) => {
  return `<li> ${c} </li>`;
});
console.log(courses);
console.log(newCourses);

*/


const series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num = 5;

const table = series.map((s) => s * num);
console.log(table);
