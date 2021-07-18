import React from "react";
import "../App.css";

export function Toolbar({
  className,
  children,
  style,
}) {
  return (
    <div
      className={`toolbar anchor-top margin-none-top padding-s padding-xs-top padding-xs-bottom ${className ? className : ''}`}
      style={style}
    >
      {children}
    </div>
  );
}
