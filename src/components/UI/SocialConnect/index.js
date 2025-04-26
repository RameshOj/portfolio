import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

export default function SocialConnect(props) {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-14">Connect With Me </span>
      <a className="socialLink" href="#">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="#">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
}
