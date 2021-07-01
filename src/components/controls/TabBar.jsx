import React from "react";
import { NavLink } from "react-router-dom";
import { doImport } from "../../util/AssetImporter";

doImport();

export function TabBar({
  className,
  children,
}) {
  return (
    <div className={`tab-bar ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export function TabBarItem({
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
        to={to}
        exact={exact}
        className={`item text-align-center cursor-pointer noselect ${selected ? 'active' : ''} ${className ? className : ''}`}
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
        className={`item text-align-center cursor-pointer noselect ${selected ? 'active' : ''} ${className ? className : ''}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <div
        title={tooltip}
        className={`item text-align-center cursor-pointer noselect ${selected ? 'active' : ''} ${className ? className : ''}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}

export function TabBarStickyContainer({
  className,
  children,
  anchor,
}) {
  let positionedClasses = "";
  switch (anchor) {
    case "bottom":
      positionedClasses = "card-border-bottom-radius border-top anchor-bottom margin-none-bottom";
      break;
    case "top":
    default:
      positionedClasses = "card-border-top-radius border-bottom anchor-top margin-none-top";
  }
  return (
    <div
      className={`bg-color-acryllic position-sticky padding-s ${positionedClasses} ${className ? className : ''}`}
    >
      {children}
    </div>
  );
}
