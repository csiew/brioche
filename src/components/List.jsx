import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

export function List({
  className,
  children,
  edgeToEdge,
  lineSeparated,
}) {
  return (
    <div className={`list ${edgeToEdge ? 'edge-to-edge' : ''} ${lineSeparated ? 'line-separated' : ''} ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export function ListItem({
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
        onClick={onClick}
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
        className={`item ${className ? className : ''}`}
        onClick={onClick}
        href={href}
        target={openInNewTab ? '_blank' : ''}
        rel="noreferrer"
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
