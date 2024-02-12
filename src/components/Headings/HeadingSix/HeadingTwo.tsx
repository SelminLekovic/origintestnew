import { HeadingSixProps as Props } from "./HeadingSix.types";
import "./HeadingSix.scss";
const HeadingSix: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <h6 className="heading6">{text}</h6>;
};

export default HeadingSix;
