import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectName from "./components/ProjectName";
import ProjectDisplay from "./components/ProjectDisplay";
import Services from "./pages/Services";
import ServiceName from "./components/ServiceName";
import ServiceDisplay from "./components/ServiceDisplay";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotFound from "./pages/NotFound";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
export default function App() {
  return (
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
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}
