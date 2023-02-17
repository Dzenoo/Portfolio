import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import bgv from "./components/assets/bgvideo.mp4";
import Welcome from "./components/ui/Welcome";
import Main from "./components/main/Main";
import Layout from "./components/layout/Layout";

import "./App.css";

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

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
