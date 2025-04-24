import React, { useEffect, useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import { navLinks } from "../../utils/Data";
import ScrollLinks from "../Links/ScrollLinks.component";
import { animateScroll } from "react-scroll";
import { Link } from "react-scroll";
import "./header.css";

const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });
  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav-logo">
          <img src={Logo} alt="logo" className="nav-logo-img" />
        </Link>
        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((navLink, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLinks
                    to={navLink}
                    name={navLink}
                    className="nav-link"
                    activeClass="active"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-button">
          <ScrollLinks
            to="reservation"
            name="Book Now"
            extraProps={{ spy: true }}
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />

          <CgMenuLeft className="nav-toggler" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
