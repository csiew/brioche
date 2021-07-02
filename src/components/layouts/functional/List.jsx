import React from "react";
import "../../../App.css";

export function List({
  className,
  children,
  edgeToEdge,
}) {
  return (
    <div className={`list ${edgeToEdge ? 'edge-to-edge' : ''} ${className ? className : ''}`}>
      {children}
    </div>
  );
}
