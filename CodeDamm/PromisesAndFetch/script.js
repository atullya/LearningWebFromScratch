//Most Imp
// We also learn how to fetch API

const promiseObject = fetch("data.json");

/*The fetch function takes a url from webrowser

In this case data.json and returns you a special object this object is not the response data because network
requests are unstable and asynchronous and can take a variable amnt of time so this doesn't return you a respose but
retuns a promise object.


*/

// A promise in a js is basically an object which promises it does not say that it will definitely but it promises
// to resolve to a value in future sometime in future

/* To know if PromiseObject got a definitve value we have to do */

promiseObject.then((response) => {
  // then accepts a function of which the first arguemt is data and the data is the result value
  const promiseObject2 = response.json(); // This is another promise that returns actual data
  promiseObject2.then((data) => {
    console.log(data);
  });
});
