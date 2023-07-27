import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import SplineScene from "./SplineScene";

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => setLoaded(true));

    return () => window.removeEventListener("load", () => setLoaded(true));
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden"
      }}
    >
      {!loaded && <Preloader />}
      <SplineScene />
    </div>
  );
};

export default App;
