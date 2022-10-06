import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="name">Daniel Barez</h1>
      <nav>
        <li>
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link className="text-link" to="/about">
            About
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
