import React from "react";
import {
  Link,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import NotFound from "./NotFound";
const Services = () => {
  const { url, path } = useRouteMatch();

  return (
    <Container className="my-5 mb-5 custom-container">
      <Row>
        <Col md={12}>
          <div className="service-list ">
            <h1 className="mb-4 fw-light fs-1 text-uppercase">
              Serv<span className="text-primary">i</span>ces
            </h1>
            <ul>
              <li className="mb-3 custom-li">
                <Link className="text-dark" to={`${url}/design`}>
                  <h3 className="fw-light"> Design </h3>
                </Link>
              </li>
              <li className="custom-li">
                <Link className="text-dark" to={`${url}/development`}>
                  <h3 className="fw-light"> Development </h3>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={12}>
          <div className="service-details">
            <Switch>
              <Route path={`${path}/:serviceId`}>
                <ServiceName />
              </Route>
            </Switch>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const ServiceName = () => {
  let { serviceId } = useParams();
  let serviceText;
  if (serviceId === "design") {
    serviceText =
      "Elevate your online game with our web design service. We'll take your website from meh to magnificent in no time!";
  } else if (serviceId === "development") {
    serviceText =
      " From web and mobile app development to custom software, we bring your vision to life. Trusted technology partners for success.";
  } else {
    return <NotFound />;
  }
  return (
    <>
    <div className="col-lg  mb-4">
    <div className="card custom-services-effect" style={{ width: "auto" }}>
      <div className="card-body">
        <div className="icon mb-2">
    <img src="https://portfolio-naitikbhavsar.netlify.app/img/icons8-html-5-48.png" alt="logo" />
      </div>
        <div className=" mb-2">
          <h2 className="text-dark text-uppercase">{serviceId}</h2>
        </div>
        <p className="card-text text-dark">
    {serviceText}
        </p>
      </div>
    </div>
  </div>
  
    </>
  );
};

export default Services;
// else block should render the notfound component
