import Button from "../UI/Button";
import me from "../../assets/images/Rammy.jpg";
import Resume from "../../assets/RameshOj.pdf";
import "./style.css";

// Hero Component
export default function Hero() {
  return (
    <div id="home" className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Ramesh Ojha
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Engineer</h1>
          <p className="font-12 grey mtb-10">
            Front-End Engineer using ReactJS.
          </p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button href="tel:+919540205885" label="Hire Me" />
            </div>
            <div className="mlr-10">
              <Button href={Resume} label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div>
          <div data-aos="fade-left" className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
