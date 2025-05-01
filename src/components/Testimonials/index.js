import React from "react";
import MediumHeading from "../UI/MediumHeading";
import SmallHeading from "../UI/SmallHeading";
import Card from "../UI/Card";
import testimonialsLeft from "../../assets/images/testimonials-01.jpg";
import testimonialsRight from "../../assets/images/testimonials-02.jpg";
import profilePicture from "../../assets/images/testimonial-pic.jpg";
import "./style.css";

export default function Testimonials() {
  return (
    <div className="container">
      <div data-aos="fade-down">
        <SmallHeading text="Testimonials" />
        <MediumHeading text="What People Say" />
      </div>
      <div
        className="flexRow wrap justify-sb align-center"
        style={{ padding: "50px 0" }}
      >
        <div data-aos="fade-left" className="testimonialImgContainer">
          <img src={testimonialsLeft} alt="" />
        </div>
        <div>
          <Card data-aos="zoom-in" className="myCard">
            <div className="flexRow align-center">
              <div className="profileImgContainer">
                <img src={profilePicture} alt="" />
              </div>
              <div className="mlr-10">
                <p className="primaryColor font-16">Tripurari Jee</p>
                <p className="textColor font-14 bold-600">
                  Computer Science Student
                </p>
              </div>
            </div>
            <p className="mtb-10 grey">
              Even after not having enough Programming Knowledge till graduation
              except C language, after entering in IT sector after graduation,
              Ramesh has never gave any excuse to why not to learn how to code.
              He started his journey going through HTML and CSS. Then he quickly
              grabbed JavaScript and in few months he cleared JavaScript
              Algorithm and Data Structure Certification. Soon he realised the
              importance of React and Redux in Development with JavaScript. Now
              He has been Hired for React Technology in a good IT company.
            </p>
          </Card>
        </div>
        <div data-aos="fade-right" className="testimonialImgContainer">
          <img src={testimonialsRight} alt="" />
        </div>
      </div>

      <Card className="m-auto contactCard">
        <p className="text-center font-12, mtb-10">
          Have any Project in Mind?
          <span className="primaryColor"> Say Hello at</span>
        </p>
        <p className="text-center font-20">ramstartwork@gmail.com</p>
      </Card>
    </div>
  );
}
