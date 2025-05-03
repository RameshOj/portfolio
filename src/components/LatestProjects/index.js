import React from "react";
import Card from "../UI/Card";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import latestProject from "../../assets/projects/Western.png";
import Button from "../UI/Button";
import "./style.css";

export default function LatestProjects() {
  return (
    <div
      id="portfolio"
      className="container"
      style={{ marginTop: "50px", marginBottom: "50px" }}
    >
      <div data-aos="zoom-in-up">
        <Card className="flexRow flexCol align-center justify-sb">
          <div className="projectPortfolioContainer">
            <SmallHeading text="Portfolis" />
            <MediumHeading
              style={{ textTransform: "uppercase" }}
              text="Latest Projects"
            />
            <div
              className="mtb-10 flexRow"
              style={{ justifyContent: "center" }}
            >
              <Button label="Portfolios" />
            </div>
          </div>
          <div className="projectImgContainer">
            <a
              href="https://78fafdbb-23ad-4f9e-8180-6b39a306ce75.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={latestProject} alt="" />
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}
