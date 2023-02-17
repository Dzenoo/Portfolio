import { Routes, Route } from "react-router-dom";
import Welcome from "./components/ui/Welcome";
import Main from "./components/main/Main";
import "./App.css";
import Layout from "./components/layout/Layout";
import { useEffect, useState } from "react";

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
          <Route path="/main" element={<Main />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
