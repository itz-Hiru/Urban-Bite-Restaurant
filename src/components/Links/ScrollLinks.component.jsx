import React from "react";
import { Link } from "react-scroll";

const ScrollLinks = ({ to, name, className, icon, extraProps = {} }) => {
  return (
    <Link
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      activeClass="active"
      className={className}
      {...extraProps}
    >
      {name}
      {icon && icon}
    </Link>
  );
};

export default ScrollLinks;
