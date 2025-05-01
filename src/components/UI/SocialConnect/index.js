import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

export default function SocialConnect(props) {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-14">Connect With Me</span>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.facebook.com/ramesh.ojha.735/"
        rel="noreferrer"
      >
        <img src={socialIcons.facebook} alt="fb" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.instagram.com/roojhaa/"
        rel="noreferrer"
      >
        <img src={socialIcons.instagram} alt="insta" />
      </a>
      <a
        className="socialLink"
        target="_blank"
        href="https://www.linkedin.com/in/ramesh-ojha-456a7b15a/"
        rel="noreferrer"
      >
        <img src={socialIcons.linkedin} alt="linkedin" />
      </a>
    </div>
  );
}
