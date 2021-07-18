import React from "react";
import { Toolbar } from "./Toolbar";
import "../App.css";

export function Navbar({
  className,
  style,
  left,
  center,
  right,
}) {
  return (
    <Toolbar
      className={`justify-space-between ${className ? className : ''}`}
      style={style}
    >
      <div>{left}</div>
      <div>{center}</div>
      <div>{right}</div>
    </Toolbar>
  );
}
