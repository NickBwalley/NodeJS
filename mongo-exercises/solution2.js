const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String, 
  author: String, 
  tags: [String], 
  date: Date,
  isPublished: Boolean, 
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses(){
  const results = await Course
    // .find({isPublished: true, tags: {$in: ['frontend', 'backend']}})
    .find({isPublished: true})
    .or([{tags: 'frontend'}, {tags: 'backend'}])
    .sort({price: -1})
    .select('name author price')
  return results;
}

async function run(){
  const courses = await getCourses();
  console.log(courses);
}
run();