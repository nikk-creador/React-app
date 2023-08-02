import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectName from "./components/ProjectName";
import ProjectDisplay from "./components/ProjectDisplay";
import ServiceName from "./components/ServiceName";
import ServiceDisplay from "./components/ServiceDisplay";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Loader from "./components/Loader";
import { lazy } from "react";
import { Suspense } from "react";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
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
    </>
  );
}
