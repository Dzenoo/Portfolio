import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loader";
import { AppContext } from "./context/app-context";
const Welcome = React.lazy(() => import("./components/ui/Welcome"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Main = React.lazy(() => import("./components/main/Main"));

function App() {
  const [loading, setLoading] = useState(true);
  const appCtx = useContext(AppContext);

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
      {appCtx.isLoading ? (
        <Loader />
      ) : (
        <Layout>
          <Suspense
            fallback={
              <div>
                <Loader />
              </div>
            }
          >
            <Routes>{routes}</Routes>
          </Suspense>
        </Layout>
      )}
    </>
  );
}

export default App;
