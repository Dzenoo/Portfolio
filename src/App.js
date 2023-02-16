import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Ui/Welcome";
import Main from "./components/Main/Main";
import Navigation from "./components/Layout/Navigation";
import "./App.css";
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
    <div>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
