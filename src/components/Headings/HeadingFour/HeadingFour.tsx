import { HeadingFourProps as Props } from "./HeadingFour.types";
import "./HeadingFour.scss";
const HeadingFour: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <h2 className="heading4">{text}</h2>;
};

export default HeadingFour;
