// Promise.all takes an array of promises as input, and it gets resolved when all the
// promises get resolved
const promiseAllExample = () => {
  const promise1 = new Promise((resolve, reject) => {
    if (true) {
      resolve("Stuff worked");
    } else {
      reject("Error");
    }
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Hi");
  });
  Promise.all([promise1, promise2])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

export { promiseAllExample };
