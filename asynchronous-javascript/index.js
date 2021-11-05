console.log('Before');
setTimeout(() => {
  console.log('Fetching some data from the database...');
}, 2000);
console.log('After');

// this is an example of a asynchronous javascript code, or non-blocking
// in this case the code will execute before and after before fetching some data from the database
// Unlike synchronous javascript which is blocking which means that it will have to wait for the
// fetching some data from the database to complete before going to the after statement.
