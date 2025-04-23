import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Quote from "../../assets/testimonial/quote.svg";
import Stars from "../../components/ReviewRatings/Stars.component";
import SectionTitle from "../../components/Title/SectionTitle.component";
import { testimonialItem } from "../../utils/Data";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials section">
      <SectionTitle
        subtitle="Client Love"
        title={
          <>
            Words That <span>Warm</span> Our Hearts
          </>
        }
      />
      <Swiper
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        pagination={true}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="container"
      >
        {testimonialItem.map(({ img, name, description, stars }, index) => {
          return (
            <SwiperSlide className="testimonial-item" key={index}>
              <div className="testimonial-bg">
                <img src={Quote} alt="" className="testimonial-quote" />
                <div className="testimonial-data">
                  <img src={img} alt="profile" className="testimonial-img" />
                  <div>
                    <h3 className="testimonial-name">{name}</h3>
                    <p className="testimonial-profile">Customer</p>
                  </div>
                </div>
                <p className="testimonial-description">{description}</p>
                <Stars stars={stars} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
