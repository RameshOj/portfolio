import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { colors } from "../../style";
import Rammy2 from "../../assets/images/Rammy2.jpg";
import "./style.css";
import SocialConnect from "../UI/SocialConnect";

// You can later make these dynamic
const percentage = 90;

export default function TeachingExpertise() {
  return (
    <div
      className="container"
      style={{ margin: "50px auto", padding: "50px 0" }}
    >
      <div>
        {/* HEADING */}
        <div className="headingContainer mtb-10" style={{ height: "50px" }}>
          <SmallHeading text="Teaching Expertise" />
          <MediumHeading text="What I Teach Best" />
        </div>

        <div className="flexRow flexCol justify-sb align-center">
          {/* LEFT IMAGE */}
          <div data-aos="fade-right" className="rightImgMeContainer">
            <img src={Rammy2} alt="Ramesh Ojha Teaching" />
          </div>

          {/* RIGHT CONTENT */}
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
              }}
            >
              <div className="flexRow align-center">
                {/* PROGRESS */}
                <div style={{ width: "80px", height: "80px" }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      textColor: colors.primaryColor,
                      pathColor: colors.primaryColor,
                    })}
                  />
                </div>

                {/* TITLE */}
                <h2 className="textColor mlr-10">React & JavaScript</h2>
              </div>

              {/* DESCRIPTION */}
              <p className="grey mtb-10 font-12">
                Specialized in teaching ReactJS and JavaScript from basics to
                advanced level with real-world projects, interview preparation,
                and hands-on coding approach.
              </p>
            </Card>

            {/* SOCIAL */}
            <SocialConnect style={{ position: "relative", margin: "15px 0" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
