import React from "react";
import "../../App.css";

export function Toolbar(props) {
  return (
    <div className={`toolbar anchor-top margin-none-top padding-s padding-xs-top padding-xs-bottom ${props.className ? props.className : ''}`}>
      {props.children}
    </div>
  );
}
