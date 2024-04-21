import React from "react";
import SocialConnect from "../UI/SocialConnect";
import conversation from "../../assets/images/phone.png";
import "./style.css";

export default function Footer() {
  return (
    <div className="container">
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "50px 0" }}
      >
        <div className="mtb-10">
          <SocialConnect />
        </div>
        <div className="footerMenus mtb-10">
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#qualification">Qualification</a>
            <a href="#testimonials">Testimonials</a>
          </nav>
        </div>
        <div className="conversationContainer primaryBgColor mtb-10">
          <a href="tel:+919205018942">
            <img alt="phone" src={conversation} />
          </a>
        </div>
      </div>
    </div>
  );
}
