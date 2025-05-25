import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footermaincon">
        <div className="footerleft">
          <div className="footerlogo">
            <h1>Artificial Elegance Flowers</h1>
            <p>“Bringing Blooms to life, One petal at a time"</p>
          </div>
          <div className="socials">
            <Link to= "https://www.facebook.com/profile.php?id=61557011917917"><FontAwesomeIcon icon={faFacebook} /></Link>
            <Link to="https://www.instagram.com/artificialeleganceflowers/"><FontAwesomeIcon icon={faInstagram} /></Link>
            <Link to="https://www.linkedin.com/in/artificial-elegance-500b8a303/"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </div>
        </div>
        <div className="footerright">
          <div className="quicklinks">
            <h2>Quick Links</h2>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li>Services</li>
            </ul>
          </div>
          <div className="resources">
            <h2>Resources</h2>
            <ul>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Support</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className="contactus">
            <h2>Contact Us</h2>
            <ul>
              <li>+971506657241</li>
              <li>Arjwan BLDG, Shop-4 - Al RAshigiya 1 , Ajman UAE</li>
              <li>artificial.eleganceflowers@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>
          &copy;2025 Artificial Elegance Flowers SPS L.L.C. All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
