import { HeadingFiveProps as Props } from "./HeadingFive.types";
import "./HeadingFive.scss";
const HeadingFive: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <h5 className="heading5">{text}</h5>;
};

export default HeadingFive;
