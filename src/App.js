import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AppContext } from "./context/app-context";
import "./App.css";

import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loader";
import Welcome from "./components/ui/Welcome";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Main from "./components/main/Main";

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
          <button
            className="open_menu_btn"
            onClick={() => appCtx.setIsMenu((prevState) => !prevState)}
          >
            Open menu
          </button>
          <Routes>{routes}</Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
