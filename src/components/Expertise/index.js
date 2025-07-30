import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import Rammy2 from "../../assets/images/Rammy2.jpg";
import "./style.css";
import SocialConnect from "../UI/SocialConnect";

const percentage = 70;

// Expertise Component
// This component displays the expertise section with a circular progress bar and social links
export default function Expertise() {
  return (
    <div
      className="container"
      style={{ margin: "50px auto", padding: "50px 0" }}
    >
      <div>
        <div className="headingContainer mtb-10" style={{ height: "50px" }}>
          <SmallHeading text="Expertise" />
          <MediumHeading text="Special Skill" />
        </div>
        <div className="flexRow flexCol justify-sb align-center">
          <div data-aos="fade-right" className="rightImgMeContainer">
            <img src={Rammy2} alt="" />
          </div>
          <div
            className="align-center text-center"
            style={{ margin: "auto", position: "relative" }}
          >
            <Card
              data-aos="flip-up"
              style={{
                padding: "30px",
                width: "320px",
                margin: "auto",
                position: "relative",
                right: 0,
                top: 0,
              }}
            >
              <div className="flexRow align-center ">
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                  }}
                >
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: colors.primaryColor,
                      pathColor: colors.primaryColor,
                    })}
                  />
                </div>
                <h2 className="textColor mlr-10">Development</h2>
              </div>
              <p className="grey mtb-10 font-12">
                JavaScript is One of the greatest programming language.
              </p>
            </Card>
            <SocialConnect
              style={{ position: "relative", margin: "15px 0 15px 0" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
