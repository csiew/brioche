import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Button({
  className,
  style,
  onClick,
  label,
  tooltip,
  primary,
  iconOnly,
  round,
  to,
  exact,
  href,
  openInNewTab,
  disabled,
}) {
  const styleClasses = `${iconOnly ? 'button-icon-only padding-none' : ''} ${primary ? 'button-primary' : ''} ${round ? 'border-radius-100pct' : ''} ${className ? className : ''}`;
  if (to) {
    return (
      <NavLink
        title={tooltip}
        className={`${styleClasses} ${disabled ? 'disabled' : ''}`}
        style={style}
        onClick={onClick}
        to={to}
        exact={exact}
      >
        {label}
      </NavLink>
    );
  } else if (href) {
    return (
      <a
        title={tooltip}
        className={`${styleClasses} ${disabled ? 'disabled' : ''}`}
        style={style}
        onClick={onClick}
        href={href}
        target={openInNewTab ? '_blank' : ''}
        rel="noreferrer"
      >
        {label}
      </a>
    );
  } else {
    return (
      <button
        title={tooltip}
        className={styleClasses}
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
}
