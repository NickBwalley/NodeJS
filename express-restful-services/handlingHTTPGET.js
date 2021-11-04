const express = require('express');
const app = express();

const courses = [
  { id: 1, name: 'Java' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'Python' },
];
app.get('/', (req, res) => {
  res.send('Hello World!!!'); // this is a route handler
});

app.get('/api/courses', (req, res) => {
  res.send(courses); // this is a route handler
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send('The course with the given ID was not found!');
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Configuration in the terminal using the following commands
// $ export PORT=5000 // this is for linux and mac users
// $ set PORT=5000 // this is for windows users
