import React from "react";
import "../App.css";

export function ToggleSwitch({
  className,
  style,
  state,
  disabled,
  onClick,
}) {
  return (
    <div
      className={`toggle-switch ${disabled ? 'disabled' : ''} ${state ? 'active' : ''} ${className ? className : ''}`}
      style={style}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="knob"></div>
    </div>
  );
}
