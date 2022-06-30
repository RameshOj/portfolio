import React from "react";

export default function MediumHeading({ text, style }) {
  return (
    <p
      style={style}
      className="font-25 capitalize ls-1 textColor bold-600 text-center"
    >
      {text}
    </p>
  );
}
