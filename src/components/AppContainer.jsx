import React from "react";
import "../App.css";

export function AppContainer({
  className,
  style,
  children,
}) {
  return (
    <div id="App" className={className} style={style}>
      {children}
    </div>
  );
}
