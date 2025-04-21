import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarDays,
  FaCircleArrowRight,
  FaClock,
  FaPhone,
  FaRegEnvelope,
  FaRegUser,
  FaUserGroup,
} from "react-icons/fa6";
import Select from "react-select";
import "./reservation.css";

const optionGuest = [
  { value: "", label: "Choose no. of guests" },
  { value: 1, label: "01" },
  { value: 2, label: "02" },
  { value: 3, label: "03" },
  { value: 4, label: "04" },
  { value: 5, label: "05" },
  { value: 6, label: "06" },
];

const optionTimeSlot = [
  { vale: "", label: "Choose time slot" },
  { value: 1, label: "08.30 AM - 10.30 AM" },
  { value: 2, label: "10.30 AM - 12.30 PM" },
  { value: 3, label: "12.30 PM - 02.30 PM" },
  { value: 4, label: "02.30 PM - 04.30 PM" },
  { value: 5, label: "04.30 PM - 06.30 PM" },
  { value: 6, label: "06.30 PM - 08.30 PM" },
  { value: 7, label: "08.30 PM - 10.30 PM" },
];

const customStyles = {
  valueContainer: (provided) => ({
    ...provided,
    padding: ".75rem 0 .75rem 3rem",
    fontSize: ".8rem"
  }),

  control: () => ({
    display: "flex",
    fontSize: ".8rem"
  }),

  input: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0,
    fontSize: ".8rem"
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ?  "var(--primary-color)" : "var(--title-color)",
    backgroundColor: state.isFocused ? "var(--container-color)" : "transparent",
    fontSize: ".8rem"
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "var(--text-color)",
    transform: state.isFocused ? "rotate(-180deg)" : "rotate(0)",
    transition: "transform .5s"
  }),

  menuList: (provided) => ({
    ...provided,
    maxHeight: "210px",
    overflowY: "auto",
    scrollbarWidth: "thin",
    scrollbarColor: "var(--primary-color) var(--container-color)"
  })
};

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section className="reservation-container container">
      <form action="" className="reservation-form grid">
        <div className="reservation-group grid">
          <h3 className="reservation-title">Book Yours</h3>
          <div className="reservation-div">
            <FaRegUser className="reservation-icon" />
            <input
              type="text"
              placeholder="John Doe"
              className="reservation-input"
            />
          </div>
          <div className="reservation-div">
            <FaRegEnvelope className="reservation-icon" />
            <input
              type="email"
              placeholder="yourname@example.com"
              className="reservation-input"
            />
          </div>
          <div className="reservation-div">
            <FaPhone className="reservation-icon" />
            <input
              type="tel"
              placeholder="012-345-6789"
              className="reservation-input"
            />
          </div>
        </div>
        <div className="reservation-bottom grid">
          <div className="reservation-div">
            <FaUserGroup className="reservation-icon" />
            <Select
              options={optionGuest}
              defaultValue={optionGuest[0]}
              styles={customStyles}
            />
          </div>
          <div className="reservation-div">
            <FaCalendarDays className="reservation-icon" />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="reservation-input"
            />
          </div>
          <div className="reservation-div">
            <FaClock className="reservation-icon" />
            <Select
              options={optionTimeSlot}
              defaultValue={optionTimeSlot[0]}
              styles={customStyles}
            />
          </div>
          <button className="button reservation-button">
            Book Now
            <FaCircleArrowRight className="button-icon" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default Reservation;
