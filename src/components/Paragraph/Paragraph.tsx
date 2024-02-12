import { ParagraphProps as Props } from "./Paragraph.types";
import "./Paragraph.scss";
const Paragraph: React.FC<Props> = ({ text }: Props): JSX.Element => {
  return <p className="paragraph">{text}</p>;
};

export default Paragraph;
