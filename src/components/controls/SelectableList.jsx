import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

export function SelectableList({
  className,
  children
}) {
  return (
    <div className={`list-selectable ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export function SelectableListItem({
  className,
  children,
  onClick,
  tooltip,
  selected,
  to,
  exact,
  href,
  openInNewTab,
}) {
  if (to) {
    return (
      <NavLink
        title={tooltip}
        className={`item ${selected ? 'active' : ''} ${className ? className : ''}`}
        to={to}
        exact={exact}
      >
        {children}
      </NavLink>
    );
  } else if (href) {
    return (
      <a
        title={tooltip}
        href={href}
        target={openInNewTab ? '_blank' : ''}
        rel="noreferrer"
        className={`item ${className ? className : ''}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <div
        title={tooltip}
        className={`item ${selected ? 'active' : ''} ${className ? className : ''}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
