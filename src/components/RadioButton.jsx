import React from "react";
import "../App.css";

export function RadioButton({
  className,
  disabled,
  label,
  labelClassName,
  onClick,
  style,
  state,
}) {
  return (
    <div className="hstack width-auto align-center justify-start">
      <div
        className={`radio-button ${disabled ? 'disabled' : ''} ${state ? 'active' : ''} ${className ? className : ''}`}
        style={style}
        onClick={!disabled ? onClick : undefined}
      >
        <div className="knob"></div>
      </div>
      {
        label ?
          <span className={`fg-color-secondary font-weight-600 margin-s-left ${labelClassName ? labelClassName : ''}`}>{label}</span>
        :
          ''
      }
    </div>
  );
}
