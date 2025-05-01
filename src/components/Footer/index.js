import React from "react";
import SocialConnect from "../UI/SocialConnect";
import conversation from "../../assets/images/conversation.png";
import "./style.css";

export default function Footer() {
  return (
    <div id="contact" className="container">
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
            <a href="#portfolio">Portfolio</a>
            <a href="#qual">Qualification</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
