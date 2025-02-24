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

// Version 4
const Version4 = lazy(() => import("./pages/v4"));
const UseCasesV4 = lazy(() => import("./pages/v4/use-cases"));
const DocsV4 = lazy(() => import("./pages/v4/docs"));
const PricingV4 = lazy(() => import("./pages/v4/pricing"));
const CompanyV4 = lazy(() => import("./pages/v4/company"));

// Version 5
const Version5 = lazy(() => import("./pages/v5"));
const GalleryV5 = lazy(() => import("./pages/v5/gallery"));
const CollectionsV5 = lazy(() => import("./pages/v5/collections"));
const AboutV5 = lazy(() => import("./pages/v5/about"));
const ContactV5 = lazy(() => import("./pages/v5/contact"));

// Version 6
const Version6 = lazy(() => import("./pages/v6"));
const WorkV6 = lazy(() => import("./pages/v6/work"));
const StoriesV6 = lazy(() => import("./pages/v6/stories"));
const AboutV6 = lazy(() => import("./pages/v6/about"));
const ContactV6 = lazy(() => import("./pages/v6/contact"));

// Version 7
const Version7 = lazy(() => import("./pages/v7"));
const WorkV7 = lazy(() => import("./pages/v7/work"));
const AboutV7 = lazy(() => import("./pages/v7/about"));
const ContactV7 = lazy(() => import("./pages/v7/contact"));

// Version 8
const Version8 = lazy(() => import("./pages/v8"));
const WorkV8 = lazy(() => import("./pages/v8/work"));
const AboutV8 = lazy(() => import("./pages/v8/about"));
const ContactV8 = lazy(() => import("./pages/v8/contact"));

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

          {/* Version 4 Routes */}
          <Route path="/v4" element={<Version4 />} />
          <Route path="/v4/use-cases" element={<UseCasesV4 />} />
          <Route path="/v4/docs" element={<DocsV4 />} />
          <Route path="/v4/pricing" element={<PricingV4 />} />
          <Route path="/v4/company" element={<CompanyV4 />} />

          {/* Version 5 Routes */}
          <Route path="/v5" element={<Version5 />} />
          <Route path="/v5/gallery" element={<GalleryV5 />} />
          <Route path="/v5/collections" element={<CollectionsV5 />} />
          <Route path="/v5/about" element={<AboutV5 />} />
          <Route path="/v5/contact" element={<ContactV5 />} />

          {/* Version 6 Routes */}
          <Route path="/v6" element={<Version6 />} />
          <Route path="/v6/work" element={<WorkV6 />} />
          <Route path="/v6/stories" element={<StoriesV6 />} />
          <Route path="/v6/about" element={<AboutV6 />} />
          <Route path="/v6/contact" element={<ContactV6 />} />

          {/* Version 7 Routes */}
          <Route path="/v7" element={<Version7 />} />
          <Route path="/v7/work" element={<WorkV7 />} />
          <Route path="/v7/about" element={<AboutV7 />} />
          <Route path="/v7/contact" element={<ContactV7 />} />

          {/* Version 8 Routes */}
          <Route path="/v8" element={<Version8 />} />
          <Route path="/v8/work" element={<WorkV8 />} />
          <Route path="/v8/about" element={<AboutV8 />} />
          <Route path="/v8/contact" element={<ContactV8 />} />

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
