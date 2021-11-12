const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground3')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  authors: [authorSchema]
}));

async function createCourse(name, authors) {
  const course = new Course({
    name, 
    authors
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function addAuthor(courseId, author){
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function updateAuthor(courseId){
  const course = await Course.findById(courseId);
  course.author.name = 'Nicholas Bwalley';
  course.save();
}
// updateAuthor('618e0a01dfe8f73a4fe1b1ef')
/*createCourse('Node Course',[
  new Author({ name: 'Nick' }),
  new Author({ name: 'John' })
]);*/

// addAuthor('618e0db295c74d8d088e24c0', new Author({name: 'Allan'}));

async function removeAuthor(courseId, authorId){
  const courser = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.remove();
  course.save();
};

