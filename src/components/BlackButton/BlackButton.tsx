import { Link } from "react-router-dom";
import "./BlackButton.scss";
import { BlackButtonProps as Props } from "./BlackButton.types";

const BlackButton: React.FC<Props> = ({ text, to }: Props): JSX.Element => {
  return (
    <Link className="blackButton" to={"/" + to}>
      {text}
    </Link>
  );
};

export default BlackButton;
