import React from "react";
const ProjectName = () => {
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

  return (
    <div className="m-4">
      <ul>
        {Object.entries(projectList).map(([slugProject, { title }]) => (
          <li key={slugProject}>
            <div to={`/projects/${slugProject}`}>
              <div className="d-flex justify-content-start align-items-center">
                <p className="lead fs-3">
                  <i className="bi bi-arrow-right"></i> {title}
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
