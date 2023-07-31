import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ServiceName from "./components/ServiceName";
import ServiceDisplay from "./components/ServiceDisplay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import "./App.css";
import { useState } from "react";
export default function App() {
  let liCollection = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/projects",
      name: "Projects",
    },
    {
      id: 3,
      to: "/services",
      name: "Services",
    },
    {
      id: 4,
      to: "/about",
      name: "About",
    },

    {
      id: 5,
      to: "/contact",
      name: "Contact",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
         const handleClick = () => {
    setIsDarkMode(prevState => !prevState);
  };

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

    <button type="button" className="btn btn-dark d-lg-block d-none" onClick={handleClick}>
      {isDarkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
    </button>


        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/services" element={<Services />}>
            <Route index element={<ServiceName />} />
            <Route path=":slug" element={<ServiceDisplay />} />
            {/* child route of services which will be made available using the outlet in v6 */}
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
