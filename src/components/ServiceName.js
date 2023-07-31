import React from "react";
import { Link } from "react-router-dom";
const ServiceName = () => {
  const serviceList = {
    design: {
      title: "Design",
      description:
        "Elevate your online game with our web design service. We'll take your website from meh to magnificent in no time!",
    },
    development: {
      title: "Development",
      description:
        "From web and mobile app development to custom software, we bring your vision to life. Trusted technology partners for success.",
    },
    database: {
      title: "Database",
      description:
        "Unlock the full potential of your data with our SQL service. From complex queries to seamless integrations, we've got you covered",
    },
  };

  return (
    <div className="m-4">
      <ul>
        {Object.entries(serviceList).map(([slug, { title }]) => (
          <li key={slug}>
            <Link className="nav-link" to={`/services/${slug}`}>
              <div className="d-flex justify-content-start align-items-center">
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
