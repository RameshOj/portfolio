import React from "react";

// SmallHeading Component
// This component renders a small-sized heading with customizable text
export default function SmallHeading({ text }) {
  return (
    <p className="uppercase font-14 bold-600 primaryColor text-center mtb-10">
      {text}
    </p>
  );
}
