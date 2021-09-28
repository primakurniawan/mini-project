import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar glass">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <FaBars onClick={toggleNavbar} />
      </span>
      <a href="#" className="logo">
        logo
      </a>
      <ul className={active ?? "active"} id="main-nav">
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Contact Us
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
