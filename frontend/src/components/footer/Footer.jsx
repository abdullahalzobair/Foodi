import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            Choose form a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/ZobairAlAbdullah/"
              target="_blank"
            >
              {" "}
              <img src={assets.facebook_icon} alt=""></img>
            </a>
            <a href="https://x.com/Zobair29" target="_blank">
              <img src={assets.twitter_icon} alt=""></img>
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-al-zobair/"
              target="_blank"
            >
              <img src={assets.linkedin_icon} alt=""></img>
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+88001855864435</li>
            <li>abdalzobair27@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {new Date().getFullYear()} &copy; Foodi.com - All Right
        Reserved.
      </p>
    </div>
  );
};

export default Footer;
