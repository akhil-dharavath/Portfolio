import React from "react";
import "../assets/About.css";
import about from "../assets/images/about.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="image-container">
        <img src={about} alt="about" />
      </div>
      <div className="description">
        <h2>ABOUT ME</h2>
        <p>
          Proficient in HTML, CSS, JavaScript, React.js, React Redux, and REST
          API. 4 months of hands-on experience in React development, web page
          creation, web design, and API integration. Strong problem-solving and
          analytical skills, with the ability to quickly learn and adapt to new
          technologies, excellent communication and teamwork abilities.
        </p>
      </div>
    </div>
  );
};

export default About;
