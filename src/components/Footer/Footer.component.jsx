import React from "react";
import Logo from "../../assets/Logo.png";
import "./footer.css";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { PiPaperPlaneBold } from "react-icons/pi";
import { footerLinks } from "../../utils/Data";
import ScrollLinks from "../Links/ScrollLinks.component";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer-container container grid">
        <div>
          <a href="/" className="footer-logo">
            <img src={Logo} alt="" className="footer-logo-img" />
          </a>
          <p className="footer-description">
            Tucked in the heart of the city, Urban Bite brings you a bold fusion
            of taste, culture, and comfort. Whether you're craving a cozy bite,
            a quick lunch, or a flavorful night out, we serve every dish with
            passion and a dash of urban flair. Join us for great food, warm
            vibes, and unforgettable moments.
          </p>
          <p className="footer-newsletter">Subscribe Our Newsletter</p>
          <form action="" className="footer-form">
            <FaEnvelope className="footer-form-icon" />
            <input
              type="email"
              placeholder="Your email"
              className="footer-input"
            />
            <button className="footer-button button">
              Subscribe
              <PiPaperPlaneBold className="button-icon" />
            </button>
          </form>
        </div>
        <div className="footer-group grid">
          <div>
            <h3 className="footer-title">Navigations</h3>
            <ul className="footer-links grid">
              {footerLinks.map((footerLink, index) => {
                return (
                  <li key={index} className="footer-item">
                    <ScrollLinks
                      to={footerLink}
                      name={footerLink}
                      className="footer-link"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Opening Hours</h3>
            <ul className="footer-opening grid">
              <li className="opening-time">
                <span>Week</span>
                <span>09.00 AM - 21.00 PM</span>
              </li>
              <li className="opening-time">
                <span>Sunday</span>
                <span>08.00 AM - 23.00 PM</span>
              </li>
              <li className="opening-time">
                <span>Saturday</span>
                <span>10.00 AM - 22.00 PM</span>
              </li>
              <li className="opening-time">
                <span>Holidays</span>
                <span>10.00 AM - Midnight</span>
              </li>
              <li className="opening-time">
                <span>Poya Day</span>
                <span className="closed">Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Get in Touch</h3>
            <div className="footer-contact grid">
              <div className="footer-item">
                <span className="footer-icon">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className="footer-subtitle">Location</h3>
                  <p className="footer-info">
                    216/6, Polhena, Kelaniya, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="footer-item">
                <span className="footer-icon">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h3 className="footer-subtitle">Contact Us</h3>
                  <p className="footer-info">+94 72 550 8919</p>
                </div>
              </div>
              <div className="footer-item">
                <span className="footer-icon">
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className="footer-subtitle">Mail to</h3>
                  <p className="footer-info">urbanbitelk@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <span className="footer-copy">
          &#169; Copyright 2025 <span className="closed">Urban Bite</span> All
          Rights Reserved.
        </span>
        <div className="footer-socials">
          <a href="/" className="footer-social-link" tarhget="_blank">
            <FaFacebook />
          </a>
          <a href="/" className="footer-social-link" tarhget="_blank">
            <FaInstagram />
          </a>
          <a href="/" className="footer-social-link" tarhget="_blank">
            <FaXTwitter />
          </a>
          <a href="/" className="footer-social-link" tarhget="_blank">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
