import SocialConnect from "../UI/SocialConnect";
import "./style.css";

// Footer Component
// This component displays the footer with social links and navigation menus
export default function Footer({ isOtherPage = false }) {
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
            <a href={isOtherPage ? "/#home" : "#home"}>Home</a>
            <a href={isOtherPage ? "/#about" : "#about"}>About</a>
            <a href={isOtherPage ? "/#portfolio" : "#portfolio"}>Portfolio</a>
            <a href={isOtherPage ? "/#qual" : "#qual"}>Qualification</a>
            <a href={isOtherPage ? "/#contact" : "#contact"}>Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
