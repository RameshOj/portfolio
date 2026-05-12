import Button from "../UI/Button";
import me from "../../assets/images/Rammy.jpg";
import "./style.css";

export default function TeacherHero() {
  return (
    <div id="teacher" className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Ramesh Ojha
          </p>

          <h1 className="textColor ls-1 mtb-10">Programming Instructor</h1>

          <p className="font-12 grey mtb-10">
            5+ years of experience teaching Computer Programming, ReactJS, and
            JavaScript. Helping students build real-world projects and crack
            interviews.
          </p>

          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <Button href="tel:+919540205885" label="Book a Class" />
            </div>

            <div className="mlr-10">
              <Button
                href="mailto:youremail@gmail.com"
                label="Contact Me"
                inverse={true}
              />
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <div data-aos="fade-left" className="meRightImgContainer">
            <img src={me} alt="Ramesh Ojha - Programming Teacher" />
          </div>
        </div>
      </div>
    </div>
  );
}
