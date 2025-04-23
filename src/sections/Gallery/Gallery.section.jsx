import React from "react";
import "./gallery.css";
import SectionTitle from "../../components/Title/SectionTitle.component";
import { gallery } from "../../utils/Data";
import { RiAddLargeLine } from "react-icons/ri";

const Gallery = () => {
  return (
    <section className="gallery section">
      <SectionTitle
        subtitle="Moments Captured in Flavor"
        title={
          <>
            Where <span>Every Dish</span> Tells a Story
          </>
        }
      />
      <div className="gallery-container container">
        {gallery.map((gallery, index) => {
          return (
            <div key={index} className="gallery-item">
              <img src={gallery} alt="gallery-image" className="gallery-img" />
              <a href={gallery} className="gallery-link">
                <RiAddLargeLine />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
