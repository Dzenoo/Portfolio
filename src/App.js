import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
const Welcome = React.lazy(() => import("./components/ui/Welcome"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Main = React.lazy(() => import("./components/main/Main"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Welcome />;
  }

  let routes;
  routes = (
    <>
      <Route path="/" element={<Main />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="*" element={<Navigate to="/" />} />
    </>
  );

  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>{routes}</Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
