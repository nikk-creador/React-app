import React from "react";
const ProjectName = () => {
  const projectList = {
    project1: {
      title: "Project 1",
      description:
        "Elevate your online game with our web design service. We'll take your website from meh to magnificent in no time!",
    },
    project2: {
      title: "Project 2",
      description:
        "From web and mobile app development to custom software, we bring your vision to life. Trusted technology partners for success.",
    },
    project3: {
      title: "Project 3",
      description:
        "Unlock the full potential of your data with our SQL service. From complex queries to seamless integrations, we've got you covered",
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
