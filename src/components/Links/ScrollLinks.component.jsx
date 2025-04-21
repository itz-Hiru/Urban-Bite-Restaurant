import React from "react";

const ScrollLinks = ({ to, name, className, icon }) => {
  return (
    <a href={to} className={className}>
      {name}
      {icon && icon}
    </a>
  );
};

export default ScrollLinks;
