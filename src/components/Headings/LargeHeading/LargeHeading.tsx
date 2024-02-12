/* eslint-disable @typescript-eslint/no-explicit-any */
import { LargeHeadingProps as Props } from "./LargeHeading.types";
import "./LargeHeading.scss";
import { useEffect } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

const LargeHeading: React.FC<Props> = ({
  text,
  identifier,
}: Props): JSX.Element => {
  let count = 0;
  useEffect(() => {
    document.querySelectorAll(".largeHeading").forEach((heading: any) => {
      count++;
      const triggerSelector = "scrolling" + count;

      const headingWidth = heading?.offsetWidth + 0;
      setTimeout(() => {
        {
          heading &&
            gsap.to(heading, {
              scrollTrigger: {
                trigger: heading,
                start: `bottom center+=400`,
                end: `bottom+=300 center`,
                scrub: true,
                markers: false,
                onUpdate: function (self) {
                  const progress = self.progress;
                  const targetWidth = progress * headingWidth;
                  const elementToAlter =
                    document.getElementById(triggerSelector);
                  if (elementToAlter) {
                    elementToAlter.style.width = `${targetWidth}px`;
                  }
                },
              },
              ease: "none",
              delay: 0,
            });
        }
      }, 1);
    });
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [count]);

  return (
    <div className="headingWrapper">
      <h1
        id={"largeHeading" + identifier}
        data-content={text}
        data-width={identifier}
        className="largeHeading"
      >
        {text}
      </h1>
      <h1 className="largeHeadingHovered" id={"scrolling" + identifier}>
        {text}
      </h1>
    </div>
  );
};

export default LargeHeading;
