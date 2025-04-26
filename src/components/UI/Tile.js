import React from "react";

export default function Tile({ title, mediumTitle, desc }) {
  return (
    <div
      data-aos="zoom-in-up"
      className="mtb-10"
      style={{ backgroundColor: "#fff", padding: "20px", width: "300px" }}
    >
      <p className="primaryColor font-14 bold-500 mtb-10 uppercase">{title}</p>
      <p className="textColor font-14 bold-600 mtb-10 uppercase">
        {mediumTitle}
      </p>
      <p className="grey font-12 mtb-10">{desc}</p>
    </div>
  );
}
