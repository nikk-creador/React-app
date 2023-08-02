import React from "react";
import NotFound from "../pages/NotFound";
import { useParams } from "react-router-dom";
const ServiceDisplay = () => {
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

  const { slugService } = useParams();
  const service = serviceList[slugService];
  if (!service) {
    return <NotFound />;
  }
  const { title, description } = service;

  return (
    <div className="card custom-services-effect custom-container w-75 mt-4">
      <div className="card-body p-4 ">
        <div className="mb-2">
          {" "}
          <i className="bi bi-filetype-html fs-2"></i>
        </div>
        <div className=" mt-3">
          <h4 className="text-dark">{title}</h4>
        </div>
        <p className="card-text text-dark lead fs-5">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDisplay;
