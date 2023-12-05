import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
  // navbar close automatically
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3 fs-5">
        <Link
          onClick={collapseNav}
          data-aos="zoom-in"
          to="/"
          className="navbar-brand mx-5"
        >Naitik.dev</Link>
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
