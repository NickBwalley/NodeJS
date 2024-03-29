console.log('Before');
getUser(1, getRepositories);

// functions to get rid of CALLBACK HELL
function getRepositories(user) {
  getRepositories(user.githubUserName, getCommits);
}

function getCommits(repos) {
  getCommmits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from the database...');
    callback({ id: id, githubUserName: 'Nick' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling some GitHub API...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}

// this is an example of a asynchronous javascript code, or non-blocking
// in this case the code will execute before and after before fetching some data from the database
// Unlike synchronous javascript which is blocking which means that it will have to wait for the
// fetching some data from the database to complete before going to the after statement.
