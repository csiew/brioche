import React, { useEffect } from "react";
import styleVarMap from "../styles/styleVarMap.json";
import "../App.css";

export function AppContainer({
  className,
  style,
  children,
  styleOverride,
}) {
  useEffect(() => {
    if (styleOverride) {
      console.log(styleOverride);
      const root = document.getElementById("App");
      Object.entries(styleOverride).forEach(item => {
        if (Object.keys(styleVarMap).includes(item[0])) {
          root.style.setProperty(styleVarMap[item[0]], item[1]);
        }
      });
    }
  }, []);

  return (
    <div id="App" className={className} style={style}>
      {children}
    </div>
  );
}
