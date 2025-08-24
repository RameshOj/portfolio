import "./styles.css";
import latestProject from "../../assets/projects/Western.png";
import secondProject from "../../assets/projects/Pooja.png";

export default function Portfolios() {
  return (
    <div className="portfolio-container">
      <p className="uppercase bold-500 textColor ls-1 mtb-30">
        Check out some of my <span className="primaryColor">latest</span> work!
      </p>
      <h1 className="textColor ls-1">My Portfolios</h1>
      <div className="portfolio-list mtb-30">
        <div
          className="portfolio-item"
          onClick={() =>
            window.open(
              "https://78fafdbb-23ad-4f9e-8180-6b39a306ce75.netlify.app/",
              "_blank"
            )
          }
        >
          <p className="uppercase textColor">
            It was made for a <span className="primaryColor">friend's </span>
            business
          </p>
          <h2 className="mtb-10 textColor bold-500">
            Laundry Service Provider
          </h2>
          <a
            href="https://78fafdbb-23ad-4f9e-8180-6b39a306ce75.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="prImgAnchor"
          >
            <img width={"95%"} src={latestProject} alt="" />
          </a>
        </div>
        <div
          className="portfolio-item"
          onClick={() => window.open("https://pujari-oj.vercel.app/", "_blank")}
        >
          <p className="uppercase textColor">
            It was made for a <span className="primaryColor">client's </span>
            business
          </p>
          <h2 className="mtb-10 textColor bold-500">Hindu Religious Rituals</h2>
          <a
            href="https://pujari-oj.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="prImgAnchor"
          >
            <img width={"90%"} src={secondProject} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
