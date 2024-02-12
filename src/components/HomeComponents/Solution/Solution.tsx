
import LargeHeading from "../../Headings/LargeHeading/LargeHeading";
import "./Solution.scss";
import HeadingThree from "../../Headings/HeadingThree/HeadingThree";
const Solution = () => {
  return (
    <div className="solutionWrapper">
      <div>
        <LargeHeading identifier={1} text="HERE TO TRANSFORM" />
        <LargeHeading identifier={2} text="NOT CONFORM" />
      </div>
      <div>
        <HeadingThree text="We've embraced a different kind of cool – one that thrives on creativity, innovation, and a fresh perspective." />
      </div>
    </div>
  );
};

export default Solution;
