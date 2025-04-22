import React from "react";
import "../../sections/Menu/menu.css";
import Stars from "../ReviewRatings/Stars.component";

const MenuItem = ({ menuItems }) => {
  const formatNumber = (num) =>
    new Intl.NumberFormat("en", {
      notation: "compact",
      compactDisplay: "short",
    }).format(num);
  return (
    <>
      {menuItems.map(({ id, img, meal, price, title, stars, reviews }) => {
        return (
          <article className="menu-item group" key={id}>
            <div className="menu-data">
              <img src={img} alt="food item" className="menu-img" />
              <span className="menu-price">Rs.{price}</span>
            </div>
            <h3 className="menu-title">{title}</h3>
            <p className="menu-description">{meal}</p>
            <div className="menu-rate">
              <Stars stars={stars} />
              <span>
                {stars} ({formatNumber(reviews)})
              </span>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default MenuItem;
