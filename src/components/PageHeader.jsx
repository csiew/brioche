import React from "react";
import "../App.css";

export function PageHeader({
  className,
  title,
  isTextured,
  isItalic,
}) {
  return (
    <div className="width-full page-title-main">
      <div className={`page-title ${isTextured ? 'textured-text' : ''} ${isItalic ? 'font-style-italic' : ''} ${className ? className : ''}`}>
        <h2>{title}</h2>
      </div>
    </div>
  );
}
