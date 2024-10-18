import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import "../style/navbar.scss";

function Navbar() {
  return (
    <nav className="header">
      <Link to="/">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </Link>
      <ul className="head-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
