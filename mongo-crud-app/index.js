const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "React.js course",
    author: "Nick",
    tags: ["react", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}
// createCourse();

async function getCourses() {
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in )
  //  LOGICAL OPERATORS 
  // or, and

  const courses = await Course
    // .find({ author: "Nick", isPublished: true })
    // .find({price: {$gte: 10, $lte: 20} }) // $ represent an operator
    // .find({price: {$in: [10, 15, 20]}})
    // .find()
      // .or([{author: 'Nick'}, {isPublished: true}])
      // .and([])
    
    .limit(10)
    .sort({ name: 1 }) // sorts in ascending order. // -1 means in descending order.
    .select({ name: 1, tags: 1 });
  console.log(courses);
}
getCourses();
