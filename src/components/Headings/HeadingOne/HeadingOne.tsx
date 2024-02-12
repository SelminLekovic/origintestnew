import { HeadingOneProps as Props } from "./HeadingOne.types";
import "./HeadingOne.scss";
const HeadingOne: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <h1 className="heading1">{text}</h1>;
};

export default HeadingOne;
