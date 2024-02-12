/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    const updateScrollTrigger = () => {
      ScrollTrigger.update();

      return () => {
        ScrollTrigger.getAll().forEach((instance) => instance.kill());
      };
    };
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
