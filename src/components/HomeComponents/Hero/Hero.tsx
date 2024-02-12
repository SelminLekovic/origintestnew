import "./Hero.scss";

import ContactButton from "../../ContactButton";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tick = () => {
      setTime(new Date());
    };

    const timerID = setInterval(tick, 1000);
    gsap.to(".logo", {
      top: "15%",
      duration: 0.6,
      delay: 0.4,
      ease: "power3.inOut",
    });
    gsap.to(".buttonText", {
      top: "35%",
      duration: 0.6,
      delay: 0.4,
      ease: "power3.inOut",
    });
    setTimeout(() => {
      ScrollTrigger.create({
        trigger: ".innerContent",
        start: "150px bottom",
        end: "top top",
        toggleActions: "play none none reverse",

        onEnter: () => {
          gsap.to(".logo", {
            delay: 0,
            top: "5%",
            width: "10%",
            duration: 0.65,
            ease: "power3.inOut",
          });
          gsap.to(".buttonText", {
            top: "80%",
            duration: 0.65,
            delay: 0,
            ease: "power3.inOut",
          });
        },

        onLeaveBack: () => {
          gsap.to(".logo", {
            top: "15%",
            width: "calc(100% - 100px)",
            duration: 0.65,
            ease: "power3.inOut",
          });
          gsap.to(".buttonText", {
            top: "35%",
            duration: 0.65,
            delay: 0,
            ease: "power3.inOut",
          });
        },
      });
    }, 1700);

    return () => {
      clearInterval(timerID);
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="homeHero">
      <div className="homeHeroFlex">

        <div className="innerContent">

          <div className="buttonText">
            <p className="innerText">
              We know you are curious, so go ahead, take a peek, and click that
              intriguing button!
            </p>
            <ContactButton />
          </div>
          <div className="timeWrapper">
            <p className="time">NO: {time.toLocaleTimeString()} </p>
            <p className="time">XK: {time.toLocaleTimeString()} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
