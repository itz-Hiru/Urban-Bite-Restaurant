import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaCircleArrowRight } from "react-icons/fa6";
import Logo from "../../assets/logo.png";
import { navLinks } from "../../utils/Data";
import ScrollLinks from "../Links/ScrollLinks.component";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="/" className="nav-logo">
          <img src={Logo} alt="logo" className="nav-logo-img" />
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            {navLinks.map((navLink, index) => {
              return (
                <li className="nav-item" key={index}>
                  <ScrollLinks
                    to={navLink}
                    name={navLink}
                    className="nav-link"
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
