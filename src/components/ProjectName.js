import React from "react";
import { Link } from "react-router-dom";
const ProjectName = () => {
  const projectList = {
    project1: {
      title: "Project1",
      description:
        "Elevate your online game with our web design service. We'll take your website from meh to magnificent in no time!",
    },
    project2: {
      title: "Project2",
      description:
        "From web and mobile app development to custom software, we bring your vision to life. Trusted technology partners for success.",
    },
    project3: {
      title: "Project3",
      description:
        "Unlock the full potential of your data with our SQL service. From complex queries to seamless integrations, we've got you covered",
    },
  };

  return (
    <div className="m-4">
      <ul>
        {Object.entries(projectList).map(([slug1, { title }]) => (
          <li key={slug1}>
            <div  to={`/projects/${slug1}`}>
              <div className="d-flex justify-content-start align-items-center">
                <p className="lead fs-3">
                  {" "}
                  <i className="bi bi-arrow-right"></i>{" "}
                  <span className="service-hover">{title}</span>
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectName;
