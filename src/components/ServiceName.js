import React from "react";
import { Link } from "react-router-dom";
import serviceList from "./serviceList.json";

const ServiceName = () => {
  return (
    <div className="m-4">
      <ul style={{ margin: 0, padding: 0 }}>
        {Object.entries(serviceList).map(([slugService, { title }]) => (
          <li className="service-li" key={slugService}>
            <Link className="nav-link " to={`/services/${slugService}`}>
              <div className="d-flex justify-content-start align-items-center ">
                <p className="lead fs-3">
                  {" "}
                  <i className="bi bi-arrow-right"></i>{" "}
                  <span className="service-hover">{title}</span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceName;
