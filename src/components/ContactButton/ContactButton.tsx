import "./ContactButton.scss";
import { Link } from "react-router-dom";
const ContactButton = () => {
  return (
    <Link to={"/contact"} className="contactButton">
      <p>Contact Us </p>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.40039 14.0002H19.6004M19.6004 14.0002L14.0001 8.40002M19.6004 14.0002L14.0001 19.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};

export default ContactButton;
