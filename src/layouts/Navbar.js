import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const [active, setActive] = useState(true);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { user_id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    isMobile ? setActive(false) : setActive(true);
  }, [isMobile]);

  const toggleNavbar = () => {
    if (isMobile) setActive(!active);
  };

  const onSignOutHandler = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar glass">
      <span className="navbar-toggle">
        <FaBars onClick={toggleNavbar} />
      </span>
      <Link to="/" className="logo">
        PROG
      </Link>
      <ul className={`main-nav ${active && isMobile ? "active" : ""}`}>
        <li>
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav-links">
            News
          </Link>
        </li>
        <li>
          {user_id !== "" && (
            <Link to="/new" className="nav-links">
              Add New Article
            </Link>
          )}
        </li>
        {user_id === null ? (
          <li>
            <Link to="/auth" className="nav-links">
              Sign In
            </Link>
          </li>
        ) : (
          <li>
            <Link to={window.location.pathname} className="nav-links" onClick={onSignOutHandler}>
              Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
