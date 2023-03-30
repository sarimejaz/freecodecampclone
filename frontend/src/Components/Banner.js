import React from "react";
import "../App.css";
import { useNavigate } from 'react-router-dom'
import { AiFillApple } from "react-icons/ai";
import { BsGoogle, BsMicrosoft, BsSpotify } from "react-icons/bs";
import { FaAmazon } from "react-icons/fa";

function Banner() {

  const navigate = useNavigate();

  function getToCourses(e) {
    e.preventDefault();
    navigate('/courses')
  }


  return (
    <div className="bodyBanner">
      <div className="bodyBannerHeadingsH1">
        <div >
          <h1 className="headingsH1">Learn to code - for free.</h1>
          <h1 className="headingsH1">Build projects.</h1>
          <h1 className="headingsH1">Earn certificates.</h1>
        </div>
      </div>

      <div className="bodyBannerHeadingsH4">
        <h4>
          Since 2014, More than 40,000 freeCodeCamp.org graduates have gotten
          jobs at tech companies including:
        </h4>
      </div>

      <div className="companyLogos">
        <AiFillApple className="companyLogo" />
        <BsGoogle className="companyLogo" />
        <BsMicrosoft className="companyLogo" />
        <BsSpotify className="companyLogo" />
        <FaAmazon className="companyLogo" />
      </div>

      <div>
        <button className="gettingStartedBtn" onClick={getToCourses}>Get Started(it's free)</button>
      </div>
    </div>
  );
}

export default Banner;
