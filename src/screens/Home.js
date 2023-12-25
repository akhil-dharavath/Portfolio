import React from "react";
import "../assets/Home.css";
import profile from "../assets/images/profile.png";
import html from "../assets/images/html_logo.png";
import css from "../assets/images/css_logo.svg";
import javaScript from "../assets/images/js_logo.png";
import react from "../assets/images/react_logo.png";
import redux from "../assets/images/redux_logo.png";
import node from "../assets/images/node_logo.png";
import mongoDB from "../assets/images/mongo_logo.png";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="image-and-role">
        <div className="role">
          <h1>MERN Stack Developer</h1>
          <p>
            Hi, I am Akhil Dharavath. A passionate MERN Stack Developer based in
            Warangal, Telangana, India, Near by Hyderabad.
          </p>
          <IconButton href="https://github.com/akhildgithub" target='_blank'>
            <GitHubIcon sx={{ color: "#2b3137" }} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/dharavath-akhil/" target='_blank'>
            <LinkedInIcon sx={{ color: "#0077b5" }} />
          </IconButton>
        </div>
        <img src={profile} alt="profile" />
      </div>
      <div className="tech-stack">
        <p>Tech Stack</p>
        <div className="logos">
          <img src={html} alt="html logo" />
          <img src={css} alt="css logo" />
          <img src={javaScript} alt="javaScript logo" />
          <img src={react} alt="react logo" />
          <img src={redux} alt="redux logo" />
          <img src={node} alt="node logo" />
          <img src={mongoDB} alt="mongoDB logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
