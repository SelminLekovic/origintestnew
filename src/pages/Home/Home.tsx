import "./Home.scss";
import Hero from "../../components/HomeComponents/Hero";
import Solution from "../../components/HomeComponents/Solution";
import { useState } from "react";
const Home = () => {
  const [canScroll, setCanScroll] = useState(false);

  setTimeout(() => {
    setCanScroll(true);
  }, 1700);
  return (
    <div className="homeWrapper">
      <Hero />
      {canScroll && <Solution />}
    </div>
  );
};

export default Home;
