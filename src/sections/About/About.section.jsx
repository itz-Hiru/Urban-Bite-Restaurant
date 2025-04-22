import React from "react";
import AoutImage1 from "../../assets/about/about-1.jpg";
import AboutImage2 from "../../assets/about/about-2.jpg";
import DataImage1 from "../../assets/about/quality.svg";
import DataImage2 from "../../assets/about/delicious.svg";
import SectionTitle from "../../components/Title/SectionTitle.component";
import "./about.css";
import ScrollLinks from "../../components/Links/ScrollLinks.component";
import { FaCircleArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <section className="about section">
      <div className="about-container container grid">
        <div className="about-shape grid">
          <img src={AoutImage1} alt="" className="about-img" />
          <div className="about-experience">
            <h3 className="about-no">10+</h3>
            <span className="about-details">Years of Experience</span>
          </div>
          <img src={AboutImage2} alt="" className="about-img" />
        </div>

        <div className="about-content">
          <SectionTitle
            subtitle="About Us"
            title={
              <>
                Urban <span>Fresh,</span> Always Within Reach
              </>
            }
          />
          <p className="about-description">
            At Urban Bite, we’re more than just a restaurant—we’re a celebration
            of fresh, bold flavors that bring people together. Nestled in the
            heart of the city, we take pride in serving delicious, chef-crafted
            meals made from the finest, locally sourced ingredients. Whether
            you're in the mood for a quick bite or a relaxed dining experience,
            our daily fresh menu offers something for every craving.
            <br /> With an experienced chef at the helm, each dish is
            thoughtfully crafted with passion and precision, ensuring that every
            bite is packed with flavor. We believe that great food doesn’t have
            to come at a high price, so we strive to keep our meals affordable
            without compromising on quality.
            <br /> From our friendly service to our vibrant atmosphere, Urban
            Bite is where freshness, taste, and community come together. Whether
            you're a regular or visiting for the first time, we’re always here
            to serve you a meal that leaves you craving more.
          </p>
          <div className="about-data grid">
            <div className="about-item">
              <div className="about-data-shape">
                <img src={DataImage1} alt="" className="about-data-img" />
              </div>
              <div>
                <h3 className="about-title">Exceptional Taste</h3>
                <p className="about-data-description">
                  It is a long established fact by layout
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="about-data-shape">
                <img src={DataImage2} alt="" className="about-data-img" />
              </div>
              <div>
                <h3 className="about-title">Irresistibly Delicious</h3>
                <p className="about-data-description">
                  It is a long established fact by layout
                </p>
              </div>
            </div>
          </div>
          <ScrollLinks
            to="menu"
            name="Check Menu"
            className="button"
            icon={<FaCircleArrowRight className="button-icon" />}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
