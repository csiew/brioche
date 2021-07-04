import React, { useEffect } from "react";
import "../App.css";

export function Table({
  className,
  headerMap,
  contentMap,
}) {
  useEffect(() => {
    console.log(JSON.parse(headerMap));
    JSON.parse(contentMap).forEach(entry => {
      console.log(Object.values(entry));
    });
  }, []);

  return (
    <div className={`grid grid-col-1 ${className ? className : ''}`}>
      <div className="grid grid-auto-flow-column font-weight-700">
        {
          Object.entries(JSON.parse(headerMap)).map(keyMap => {
            return (
              <span key={`header-${keyMap[0]}`} className="padding-xs padding-s-left padding-s-right bg-as-fg-color bg-color-accent-primary">
                {keyMap[1]}
              </span>
            );
          })
        }
      </div>
      <div className="grid grid-col-1">
        {
          JSON.parse(contentMap).map(entry => {
            return (
              <div className="grid grid-auto-flow-column">
                {
                  Object.values(entry).map(value => {
                    return (
                      <span className="padding-xs padding-s-left padding-s-right">
                        {value}
                      </span>
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
