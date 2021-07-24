import React from "react";
import { Toolbar } from "./Toolbar.jsx";
import { HStack } from "../layouts/HStack.jsx";
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
      <HStack>{left}</HStack>
      <HStack>{center}</HStack>
      <HStack>{right}</HStack>
    </Toolbar>
  );
}
