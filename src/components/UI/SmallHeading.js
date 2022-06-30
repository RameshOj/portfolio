import React from "react";

export default function SmallHeading({ text }) {
  return (
    <p className="uppercase font-14 bold-600 primaryColor text-center mtb-10">
      {text}
    </p>
  );
}
