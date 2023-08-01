import React from "react";
import NotFound from "../pages/NotFound";
import { useParams } from "react-router-dom";
const ProjectDisplay = () => {
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

  const { slug1 } = useParams();
  console.log(slug1, "in display");
  const project = projectList[slug1];
  console.log(project);
  if (!project) {
    return <NotFound />;
  }
  const { title, description } = project;

  return (
    <div className="card custom-services-effect custom-container w-75 mt-4">
      <div className="card-body p-4 ">
        <div className="mb-2">
          {" "}
          <i className="bi bi-code-slash fs-3"></i>
        </div>
        <div className=" mt-3">
          <h4 className="text-dark">{title}</h4>
        </div>
        <p className="card-text text-dark lead fs-5">{description}</p>
      </div>
    </div>
  );
};

export default ProjectDisplay;
