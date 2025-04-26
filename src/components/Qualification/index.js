import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Rammy3 from "../../assets/images/Rammy3.jpg";
import Button from "../UI/Button";
import Tile from "../UI/Tile";
import "./style.css";
import Resume from "../../assets/RameshOj.pdf";

export default function Qualification() {
  return (
    <div className="container" style={{ padding: "50px 0" }}>
      <SmallHeading text="Qualification" />
      <MediumHeading text="Education" />
      <div
        className="flexRow flexCol justify-sb align-center"
        style={{ margin: "40px 0" }}
      >
        <div data-aos="fade-up-right">
          <div className="eduImgContainer">
            <img src={Rammy3} alt="" />
          </div>
        </div>

        <div>
          <Tile
            title="AKTU"
            mediumTitle="B.Tech Electrical Engineering"
            desc="Scored 1st Division in Graduation"
          />
          <Tile
            title="CBSE"
            mediumTitle="Senior Secondary (PCM)"
            desc="Scored 1st Division in Intermediate"
          />
          <Tile
            title="CBSE"
            mediumTitle="High School"
            desc="Scored 1st Division in 10th"
          />
          <div className="flexRow">
            <div className="mlr-10">
              <Button href="tel:+919569389778" label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button href={Resume} label="Download CV " inverse="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
