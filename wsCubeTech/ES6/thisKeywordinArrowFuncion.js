const person = {
  test() {
    setTimeout(() => {
      console.log(this);
    }, 2000);
  },
};

person.test();
