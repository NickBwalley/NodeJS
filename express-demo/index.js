const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!!!'); // this is a route handler
});
app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]); // this is a route handler
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Configuration in the terminal using the following commands
// $ export PORT=5000 // this is for linux and mac users
// $ set PORT=5000 // this is for windows users
