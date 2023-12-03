const myPromise = new Promise((resolve, reject) => {
  const a = 5,
    b = 6;
  const c = a + b;
  if (c === 4) {
    resolve(`yes! ${a} + ${b} = 4`);
  } else {
    reject(`no! ${a} + ${b} != 4`);
  }
});

myPromise
  .then((m) => {
    console.log(m);
  })
  .catch((err) => {
    console.log(err);
  });
