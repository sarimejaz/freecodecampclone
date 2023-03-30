const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  icon: {
    type: String,
    require: true,
  },
  coursename: {
    type: String,
    require: true,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
