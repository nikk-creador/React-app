import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useState, useRef } from "react";
// import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectName from "./components/ProjectName";
import ProjectDisplay from "./components/ProjectDisplay";
import Services from "./pages/Services";
import ServiceName from "./components/ServiceName";
import ServiceDisplay from "./components/ServiceDisplay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loader from "./components/Loader";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
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
    setIsDarkMode((prevState) => !prevState);
  };
  // dark mode button

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3 fs-5">
          <Link to="/" className="navbar-brand mx-5">
            Naitik.dev
          </Link>
          <button
            ref={navButton}
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
          <div
            ref={linksContainerRef}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              {liCollection.map((liItem) => {
                return (
                  <Fragment key={liItem.id}>
                    <li className="nav-item mx-5 ms-3">
                      <NavLink
                        onClick={collapseNav}
                        to={liItem.to}
                        className="nav-link"
                      >
                        {liItem.name}
                      </NavLink>
                    </li>
                  </Fragment>
                );
              })}
            </ul>
            <button
              type="button"
              className="btn btn-dark  ms-3 mx-5"
              onClick={handleClick}
            >
              {isDarkMode ? (
                <i className="bi bi-brightness-high-fill"></i>
              ) : (
                <i className="bi bi-moon-fill"></i>
              )}
            </button>
          </div>
        </nav>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />}>
              <Route index element={<ProjectName />} />
              <Route path=":slugProject" element={<ProjectDisplay />} />
            </Route>
            <Route path="services" element={<Services />}>
              <Route index element={<ServiceName />} />
              <Route path=":slugService" element={<ServiceDisplay />} />
              {/* index means what it will render first on services route */}
              {/* child route of services which will be made available using the outlet in v6 */}
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

// https://codesandbox.io/s/collapse-bootstrap-nav-with-bootstrap-js-cdz8gi?file=/src/Nav.js , navbar auto close
