import React from "react";
import "../App.css";

export function Checkbox({
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
        className={`checkbox ${disabled ? 'disabled' : ''} ${state ? 'active' : ''} ${className ? className : ''}`}
        style={style}
        onClick={!disabled ? onClick : undefined}
      >
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
