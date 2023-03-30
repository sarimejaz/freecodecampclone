const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
app.use(cors());
// const jwt  =require('jwt')
const bodyparser = require("body-parser");
const urluncodedeParser = bodyparser.urlencoded({ extended: false });
app.use(bodyparser.json(), urluncodedeParser);
const User = require("./models/users");
const Course = require("./models/courses");
const generateAuthToken = require("./jwtTokenGenerator");

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://127.0.0.1:27017/sam")
  .then((res) => {
    console.log("data base connected");
  })
  .catch((err) => {
    console.log(err, "errrr");
  });

app.get("/", (req, res) => {
  res.send("hello from server");
});

app.post("/register", async (req, res) => {
  const user = req.body;
  const Email = await User.findOne({ email: user.email });
  if (Email) {
    res.send("user is already register in  our dataBase");
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);
    console.log(req.body.password, "rrr");
    const dbUser = new User({
      name: user.name,
      email: user.email.toLowerCase(),
      passWord: user.password,
    });
    await dbUser.save();
    res.json({ messge: "done" });
  }
});

// login api

app.post("/login", async (req, res) => {
  const userInfo = req.body;
  let userData;
  try {
    userData = await User.findOne({ email: userInfo.email });
  } catch (err) {
    console.log(err, "err while matching email in database");
  }

  if (!userData) {
    return res
      .status(401)
      .send({ message: "Invalid Email or password", success: false });
  }
  const validPassword = await bcrypt
    .compare(userInfo.passWord, userData.passWord)
    .catch((err) => {
      console.log(err, "err while hashin");
      res.status(500).send({ message: "Internal server err" });
    });
  if (!validPassword) {
    return res.status(401).status({ message: "Invalid email passWord" });
  }
  let userDataObject = userData.toObject();

  delete userDataObject.passWord;
  console.log(userData.name);
  let username = userData.name;
  const token = generateAuthToken(userData);
  console.log(userDataObject);
  return res.status(200).send({
    data: { token: token, userData: userDataObject, username:username},
    message: "Loggged in successfully",
    success: true,
  });
});

// courses in mongodb

try {
const dbcourses = [
  {icon:"MdLaptopMac",coursename:"(New) Responsive Web Design Certification (300 hours)"},
  {icon:"MdLaptopMac",coursename:"Legacy Responsive Web Design Certification (300 hours)"},
  {icon:"IoLogoJavascript",coursename:"JavaScript Algorithms and Data Structures Certification (300 hours)"},
  {icon:"GrReactjs",coursename:"Front End Development Libraries Certification (300 hours)"},
  {icon:"FaDatabase",coursename:"Data Visualization Certification (300 hours)"},
  {icon:"GrDatabase",coursename:"Back End Development and APIs Certification (300 hours)"},
  {icon:"BsFillClipboard2CheckFill",coursename:"Quality Assurance Certification (300 hours)"},
]

const options = { ordered: true };

// const result = Course.insertMany(dbcourses, options);
}
catch(e){
  console.log(e);
}


app.get("/courses", (req, res) => {
  async function myCourse() {
    const myCourses= await Course.find({});
    let array = [];
    myCourses.forEach(function(item){
        let obj = {icon:item.icon,coursename:item.coursename}
        array.push(obj); 
    });
    res.send(array);
    console.log(array);
}
myCourse();
});

app.listen(3035, () => {
  console.log("server running on port no 3035");
});
