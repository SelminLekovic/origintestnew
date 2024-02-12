import { HeadingTwoProps as Props } from "./HeadingTwo.types";
import "./HeadingTwo.scss";
const HeadingTwo: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <h2 className="heading2">{text}</h2>;
};

export default HeadingTwo;
