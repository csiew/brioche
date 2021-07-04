import React, { useEffect, useState } from "react";
import "../App.css";

export function TextBox({
  id,
  name,
  tooltip,
  label,
  className,
  style,
  type,
  value,
  placeholder,
  onChange,
  onInput,
  onClick,
  disabled,
}) {
  const [determinedType, setDeterminedType] = useState("text");

  useEffect(() => {
    if (["text", "email", "password"].includes(type)) {
      setDeterminedType(type);
    }
  }, []);

  return (
    <div className="grid grid-col-1 grid-gap-xs">
      {
        label ?
          <label htmlFor={name}>{label}</label>
        :
          ''
      }
      <input
        id={id}
        name={name}
        title={tooltip}
        type={determinedType}
        className={className}
        style={style}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onInput={onInput}
        onClick={onClick}
        disabled={disabled}
      />
    </div>
  );
}
