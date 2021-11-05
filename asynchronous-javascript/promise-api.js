const p1 = new Promise((resolve) => {
  // Kick off some async operation
  setTimeout(() => {
    console.log('Async operation 1');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve) => {
  // Kick off some async operation
  setTimeout(() => {
    console.log('Async operation 2');
    resolve(2)
  }, 2000);
});

Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));

// const p = Promise.resolve({id: 1});
// const p = Promise.reject(new Error('reason for rejection')); // return the callstack + error message;
// p.then(result => console.log(result));
// p.catch(error => console.log(error));