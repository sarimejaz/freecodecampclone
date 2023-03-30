import React, { useState, useEffect } from "react";
import "../App.css";

import { MdLaptopMac } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs, GrDatabase } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

function Courses() {
  const [dataa, setDataa] = useState([]);

  function getAllCourses() {
    return fetch("http://localhost:3035/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataa(data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  const DynamicFaIcon = ({ name }) => {
    if (name === "MdLaptopMac") {
      return <MdLaptopMac className="courseIcon"/>;
    } else if (name === "IoLogoJavascript") {
      return <IoLogoJavascript className="courseIcon"/>;
    } else if (name === "GrReactjs") {
      return <GrReactjs className="courseIcon"/>;
    } else if (name === "GrDatabase") {
      return <GrDatabase className="courseIcon"/>;
    } else if (name === "FaDatabase") {
      return <FaDatabase className="courseIcon"/>;
    } else if (name === "BsFillClipboard2CheckFill") {
      return <BsFillClipboard2CheckFill className="courseIcon"/>;
    }
  };

  console.log(dataa);

  return (
    <div className="coursesDiv">
        <h2 className="coursesHeading">Welcome to freeCodeCamp.org</h2>

        <p className="coursesQuote">"I have not failed. I've just found 10,000 ways that won't work."</p>
        <p className="author">- Thomas A. Edison</p>
    <div className="flexCourseDiv">
      <div>
        {dataa.map((item) => {
          return (
            <div className="mapCoursesDiv">

                
              <h4>
              <span><DynamicFaIcon name={item.icon} /></span>
                {item.coursename}
              </h4>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default Courses;
