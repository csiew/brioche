import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export function Button({
  className,
  disabled,
  exact,
  hollow,
  href,
  iconOnly,
  label,
  onClick,
  openInNewTab,
  primary,
  round,
  style,
  to,
  tooltip,
}) {
  const styleClasses = `${iconOnly ? 'button-icon-only padding-none' : ''} ${primary ? 'button-primary' : ''} ${hollow ? 'button-hollow' : ''} ${round ? 'border-radius-100pct' : ''} ${className ? className : ''}`;
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
