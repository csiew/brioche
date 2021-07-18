import React from "react";
import "../App.css";

export function HStack({
  className,
  style,
  children,
  align,
  justify,
  autoWidth,
  autoHeight,
}) {
  const determineAlignment = (alignProp) => {
    switch (alignProp) {
      case "top":
        return "align-start";
      case "bottom":
        return "align-end"
      case "stretch":
        return "align-stretch";
      case "space-between":
        return "align-space-between";
      case "center":
      default:
        return "align-center";
    }
  }
  const determineJustification = (justifyProp) => {
    switch (justifyProp) {
      case "left":
        return "justify-start";
      case "right":
        return "justify-end"
      case "stretch":
        return "justify-stretch";
      case "space-between":
        return "justify-space-between";
      case "center":
      default:
        return "justify-center";
    }
  }

  return (
    <div className={`hstack ${autoWidth ? 'width-auto' : ''} ${autoHeight ? 'height-auto' : ''} ${determineAlignment(align)} ${determineJustification(justify)} ${className ? className : ''}`} style={style}>
      {children}
    </div>
  );
}
