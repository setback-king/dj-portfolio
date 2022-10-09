import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="name">DANIEL BAREZ</h1>
      <nav>
        <li>
          <Link className="text-link" to="/dj-portfolio/">
            Work
          </Link>
        </li>
        <div className="line"></div>
        <li>
          <Link className="text-link" to="/dj-portfolio/about">
            About
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default Header;
