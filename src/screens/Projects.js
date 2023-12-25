import React from "react";
import "../assets/Projects.css";
import ProjectCard from "../components/ProjectCard";
import about from "../assets/images/about.png";
import shopEZee from "../assets/images/shopEZee.mp4";
import weather from "../assets/images/weather.mp4";
import inotebook from "../assets/images/inotebook.mp4";
import news from "../assets/images/news.mp4";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>PORTFOLIO</h1>
      <p>Each project is unique piece of development</p>
      <ProjectCard
        direction="right"
        img={about}
        name="ShopEZee (E-commerce)"
        description="ShopEZee is a full stack E-commerce website where a user can view products, can add to cart or buy the product. User data is fully secured including the orders and cart."
        techStack={["React", "Node", "Express", "Mongo DB", "React Redux"]}
        github="https://github.com/akhildgithub/ShopEZee---frontEnd"
        demo="https://shopezee-akhil-dharavath.netlify.app/"
        video={shopEZee}
      />
      <ProjectCard
        direction="left"
        img={about}
        name="iNoteBook (Notes on cloud)"
        description="E-commerce website with CRUD operations to enable users to manage their notes effectively. User is Authenticated and the same user only has access to their own notes"
        techStack={["React", "Node", "Express", "Mongo DB", "Context Api"]}
        github="https://github.com/akhildgithub/iNoteBook-frontend"
        demo="https://inotebook-akhil-dharavath.netlify.app"
        video={inotebook}
      />
      <ProjectCard
        direction="right"
        img={about}
        name="Weather Forecast"
        description="A real time Weather Forecast web application for any location which provides various details such as temperatures, wind speed, humidity, chance of rain etc."
        techStack={["HTML", "CSS", "JavaScript", "OpenWeatherAPI"]}
        github="https://github.com/akhildgithub/weatherForecast"
        demo="https://akhildgithub.github.io/weatherForecast/"
        video={weather}
      />
      <ProjectCard
        direction="left"
        img={about}
        name="New Application"
        description="A real time news providing web application using React based on various categories such as General, Health, Technology, Sports etc. Infinite scroll is added so that users can scroll until all news is fetched."
        techStack={["React", "Bootstrap", "JavaScript", "NewsAPI"]}
        github="https://github.com/akhildgithub/news-application"
        video={news}
      />
      
      <ProjectCard
        direction="right"
        img={about}
        name="Loan Approval System"
        description="A Node.js application that allows customers to register and get loans according to their credit score. Users can check the eligibility whether the user’s loan can be approved and the interest rate."
        techStack={["Node", "Mongo DB"]}
        github="https://github.com/akhildgithub/credit-approval-system"
      />
    </div>
  );
};

export default Projects;
