import React from "react";
import "../App.css";

export function TextAreaBox({
  id,
  name,
  tooltip,
  className,
  style,
  value,
  placeholder,
  onChange,
  onInput,
  onClick,
  readOnly,
  disabled,
}) {
  return (
    <textarea
      id={id}
      name={name}
      title={tooltip}
      className={className}
      style={style}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onInput={onInput}
      onClick={onClick}
      readOnly={readOnly ? readOnly : (onChange ? null : true)}
      disabled={disabled}
    />
  );
}
