import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Fragment } from "react";
export default function App() {
  let liCollection = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/services",
      name: "Services",
    },
    {
      id: 3,
      to: "/about",
      name: "About",
    },

    {
      id: 4,
      to: "/contact",
      name: "Contact",
    },
  ];

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3">
          <Link to="/" className="navbar-brand mx-5">
            Naitik.dev
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {liCollection.map((liItem) => {
                return (
                  <Fragment key={liItem.id}>
                    <li className="nav-item mx-3">
                      <Link to={liItem.to} className="nav-link">
                        {liItem.name}
                      </Link>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <button type="button" className="btn btn-dark d-lg-block d-none">
            #
          </button>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
