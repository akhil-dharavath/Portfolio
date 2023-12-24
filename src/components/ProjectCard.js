import React from "react";
import "../assets/Projects.css";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import HoverVideo from "../components/HoverVideo";
import no_demo from "../assets/images/no_demo.jpg";

const ProjectCard = ({
  direction,
  img,
  name,
  description,
  techStack,
  github,
  demo,
  video,
}) => {
  return (
    <div className={direction}>
      {/* <img src={img} alt={name} /> */}
      {video ? (
        <HoverVideo videoSrc={video} />
      ) : (
        // <img className="no_demo" src={no_demo} alt="demo not available" />
        <div className="no_demo" src={no_demo} alt="demo not available" />
      )}
      <div className="desc">
        <p className="heading">{name}</p>
        <p className="content">{description}</p>
        <div className="techs">
          {techStack &&
            techStack.map((tech) => (
              <p className="tech" key={tech}>
                {tech}
              </p>
            ))}
        </div>
        <div className="gitAndLive">
          <div className="git">
            <p>Code</p>
            <IconButton href={github} target="_blank">
              <GitHubIcon sx={{ color: "black" }} />
            </IconButton>
          </div>
          {demo && (
            <div className="git">
              <p>Live Demo</p>
              <IconButton href={demo} target="_blank">
                <OpenInNewIcon sx={{ color: "black" }} />
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
