import React from "react";
import projectList from "./projectList.json";

const ProjectName = () => {
  return (
    <div className="m-4">
      <ul>
        {Object.entries(projectList).map(([slugProject, { title }]) => (
          <li key={slugProject}>
            <div>
              <div className="d-flex justify-content-start align-items-center">
                <p className="lead project-title ">
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
