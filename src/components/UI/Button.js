import React from "react";
import { colors } from "../../style";

// Button Component
// This component renders a button that can be styled as primary or inverse
export default function Button(props) {
  return (
    <a
      href={props.href}
      style={{
        boxSizing: "border-box",
        padding: "10px 20px",
        background: props.inverse ? "transparent" : colors.primaryColor,
        color: props.inverse ? colors.primaryColor : "#fff",
        display: "inline-block",
        borderRadius: "20px",
        boxShadow: props.inverse ? "none" : "#6dba6d 0 0 10px 0",
        border: "1px solid",
        borderColor: props.inverse ? colors.primaryColor : "transparent",
        fontSize: 12,
        letterSpacing: "1px",
      }}
    >
      {props.label}
    </a>
  );
}
