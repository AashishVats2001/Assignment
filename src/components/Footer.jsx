import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex">
      <div className="footer-left flex-col">
        {/* Logo */}
        <div className="logo">
          LIFE<span>LINK</span>R
        </div>
        <p>All Rights Reserved 2023-2024 © Copyright - LifeLinkr |</p>
        <div className="flex footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Ads Policy</a>
          <a href="/">Data Privacy</a>
          <a href="/">Disclaimer</a>
          <a href="/">User Agreement</a>
          <a href="/">Intellectual Property Rights</a>
          <a href="/">Cookie Policy</a>
          <a href="/">Refund Policy</a>
          <a href="/">Contact Information</a>
          <a href="/">Accessablity Statement</a>
          <a href="/"> Secruty Policy </a>
          <a href="/"> GDPR Compliance</a>
        </div>
      </div>

      <div className="footer-right">
        <form action="/" className="footer-form flex-col">
        <h1>SCHEDULE YOUR DEMO</h1>
          <input
            type="tel"
            name="phone"
            id="footer-mobile"
            placeholder="Enter Your Phone Number"
          />
          <button type="submit" className="book-button">
            Book Appointment
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
