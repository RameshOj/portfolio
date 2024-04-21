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
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
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
