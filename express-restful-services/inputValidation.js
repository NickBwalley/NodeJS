const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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

// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find((c) => c.id === parseInt(req.params.id));
//   if (!course)
//     res.status(404).send('The course with the given ID was not found!');
//   res.send(course);
// });

app.post('/api/courses/', (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    // 400 Bad Request!!
    res.status(400).send(result.error.details[0].message);
    return;
  }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

// Configuration in the terminal using the following commands
// $ export PORT=5000 // this is for linux and mac users
// $ set PORT=5000 // this is for windows users
