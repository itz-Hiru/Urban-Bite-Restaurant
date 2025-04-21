import parse from "html-react-parser";
import React from "react";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCircleArrowRight,
} from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ScrollLinks from "../../components/Links/ScrollLinks.component";
import { homeSlide } from "../../utils/Data";
import "./home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <Swiper
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        modules={[Navigation, Autoplay]}
        speed={1000}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {homeSlide.map(({ img, title, description }, index) => {
          return (
            <SwiperSlide
              key={index}
              className="home-slide section"
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
              }}
            >
              <div className="home-data container">
                <h3 className="home-subtitle">Welcome to Urban Bite!</h3>
                <h1 className="home-title">{parse(title)}</h1>
                <p className="home-description">{description}</p>
                <div className="home-buttons">
                  <ScrollLinks
                    to="about"
                    name="About More"
                    className="button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />
                  <ScrollLinks
                    to="menu"
                    name="Check Menu"
                    className="button home-button"
                    icon={<FaCircleArrowRight className="button-icon" />}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        <button className="swiper-btn next-btn">
          <FaArrowRightLong />
        </button>
        <button className="swiper-btn prev-btn">
          <FaArrowLeftLong />
        </button>
      </Swiper>
    </section>
  );
};

export default Home;
