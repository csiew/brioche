import React from "react";
import "../App.css";

export function Panel({
  className,
  children,
  style,
}) {
  return (
    <div
      className={`panel ${className ? className : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
