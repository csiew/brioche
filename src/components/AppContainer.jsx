import React from "react";
import "../App.css";

export function AppContainer({
  children,
}) {
  return (
    <div id="App">
      {children}
    </div>
  );
}
