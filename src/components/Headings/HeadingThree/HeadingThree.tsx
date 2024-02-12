import { HeadingThreeProps as Props } from "./HeadingThree.types";
import "./HeadingThree.scss";
const HeadingThree: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <p className="heading3">{text}</p>;
};

export default HeadingThree;
