import React, { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";

// Landing
const Landing = lazy(() => import("./pages/landing"));

// Version 1
const Version1 = lazy(() => import("./pages/version1"));
const Portfolio = lazy(() => import("./pages/portfolio"));
const Services = lazy(() => import("./pages/services"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

// Version 2
const Version2 = lazy(() => import("./pages/version2"));
const PortfolioV2 = lazy(() => import("./pages/v2/portfolio"));
const AboutV2 = lazy(() => import("./pages/v2/about"));
const ContactV2 = lazy(() => import("./pages/v2/contact"));

// Version 3
const Version3 = lazy(() => import("./pages/v3"));
const WorkV3 = lazy(() => import("./pages/v3/work"));
const ServicesV3 = lazy(() => import("./pages/v3/services"));
const AboutV3 = lazy(() => import("./pages/v3/about"));
const ContactV3 = lazy(() => import("./pages/v3/contact"));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Landing />} />

          {/* Version 1 Routes */}
          <Route path="/v1" element={<Version1 />} />
          <Route path="/v1/portfolio" element={<Portfolio />} />
          <Route path="/v1/services" element={<Services />} />
          <Route path="/v1/about" element={<About />} />
          <Route path="/v1/contact" element={<Contact />} />

          {/* Version 2 Routes */}
          <Route path="/v2" element={<Version2 />} />
          <Route path="/v2/portfolio" element={<PortfolioV2 />} />
          <Route path="/v2/about" element={<AboutV2 />} />
          <Route path="/v2/contact" element={<ContactV2 />} />

          {/* Version 3 Routes */}
          <Route path="/v3" element={<Version3 />} />
          <Route path="/v3/work" element={<WorkV3 />} />
          <Route path="/v3/services" element={<ServicesV3 />} />
          <Route path="/v3/about" element={<AboutV3 />} />
          <Route path="/v3/contact" element={<ContactV3 />} />

          {/* Redirect old routes to v1 */}
          <Route path="/portfolio" element={<Navigate to="/v1/portfolio" />} />
          <Route path="/services" element={<Navigate to="/v1/services" />} />
          <Route path="/about" element={<Navigate to="/v1/about" />} />
          <Route path="/contact" element={<Navigate to="/v1/contact" />} />
        </Routes>
      </Suspense>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </div>
  );
}

export default App;
