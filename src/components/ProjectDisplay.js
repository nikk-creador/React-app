import React from "react";
import NotFound from "../pages/NotFound";
import { useParams } from "react-router-dom";
// import barber from "../img/barber.png";
const ProjectDisplay = () => {
  const projectList = {
    frontendbootcamp: {
      title: "Frontend Bootcamp",
      description:
        "A dynamic learning platform built with HTML, CSS,JavaScript, and Bootstrap, providing an immersive experience in front-end development.",
      img: "barber",
      demo: "https://development-bootcamp.netlify.app/",
      code: "https://github.com/nikk-creador/front-end-bootcamp",
    },
    plantdiseaseprediction: {
      title: "Plant Disease Prediction",
      description:
        "Build a CNN model,The system identifies plant diseases with accuracy of 97 percent. Also, developed aninterface using HTML, CSS, and JavaScript to allow users to easily interact with the system locally",
      demo: "https://www.dropbox.com/s/lyla2w0enko9ib7/plant%20disease%20prediction.mp4?dl=0",
      code: "https://www.dropbox.com/s/lyla2w0enko9ib7/plant%20disease%20prediction.mp4?dl=0",
    },
    hairstudio: {
      title: "Hair Studio",
      description:
        "I created a hair studio website using HTML, CSS, and JavaScript to showcase their services and expertise.The website has a user-friendly interface and effectively promotes the studio’s offerings",
      code: "https://github.com/nikk-creador/Hair-Studio-website",
      demo: "https://barbers-point.netlify.app/",
    },
  };

  const { slugProject } = useParams();
  const project = projectList[slugProject];
  if (!project) {
    return <NotFound />;
  }
  const { title, description, code, demo } = project;

  return (
    <div className="card custom-services-effect custom-container w-75 mt-4">
      {/* <img
        src={}
        className="card-img-top img img-fluid"
        alt="frontend bootcamp demo screenshot"
      /> */}

      <div className="card-body bg-light rounded-2 px-4 py-4 pb-5 pt-4">
        <i className="bi bi-code-slash fs-2"> </i>
        <h4 className="card-title mb-3 mt-3">{title}</h4>
        <p style={{ textAlign: "justify" }} className="card-text p-3">
          {description}
        </p>
        <div className="btn-group mt-3" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-outline-secondary">
            {" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark project-urlBtn"
              href={code}
            >
              code
            </a>
          </button>
          <button type="button" className="btn btn-outline-secondary">
            {" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="text-dark project-urlBtn"
              href={demo}
            >
              Demo
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
