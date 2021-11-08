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
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ author: "Nick", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 }) // sorts in ascending order. // -1 means in descending order.
    .select({ name: 1, tags: 1 });
  // .count();
  console.log(courses);
}
// getCourses();

// updating a course in mongoDB
async function updateCourse(id) {
  // Approach: Query first
  // findById
  // Modify its properties.
  // save()
  const course = await Course.findById(id);
  if (!course) return;
  course.isPublished = true;
  course.author = "programmacion es muy divertida!";
  /*course.set({
    isPublished: true,
    author: author
  })*/
  const result = await course.save();
  console.log(result);

  // Approach: Update first
  // update directly
  // optionally: get the updated document
}

updateCourse("618632d6d3c441390201c3a8");
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

// .find({price: {$gte: 10, $lte: 20} }) // $ represent an operator
// .find({price: {$in: [10, 15, 20]}})
// .find()
// .or([{author: 'Nick'}, {isPublished: true}])
// .and([])
// starts with Nick
// .find({author: /^Nick/}) // string that starts with Nick
// dollar sign expresses the end of a string.
// Note it is case sensitive so you append an i at the end to make it course insensitive.
// .find({author: /Bwalley$/i})

// contains Mosh
// .find({author: /.*Nick.*/i})
