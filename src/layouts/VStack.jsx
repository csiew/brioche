import React from "react";
import "../App.css";

export function VStack({
  className,
  style,
  children,
  align,
  justify,
  autoWidth,
  autoHeight,
  fullWidth,
  fullHeight,
}) {
  const determineAlignment = (alignProp) => {
    switch (alignProp) {
      case "left":
        return "align-start";
      case "right":
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
      case "top":
        return "justify-start";
      case "bottom":
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
    <div className={`vstack ${autoWidth ? 'width-auto' : ''} ${autoHeight ? 'height-auto' : ''} ${fullWidth ? 'width-full' : ''} ${fullHeight ? 'height-full' : ''} ${determineAlignment(align)} ${determineJustification(justify)} ${className ? className : ''}`} style={style}>
      {children}
    </div>
  );
}
