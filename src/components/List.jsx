import React, { useEffect, useRef, useState } from "react";
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
  const observerRef = useRef(null);
  const io = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    io.current = new IntersectionObserver(entry => {
      setIsVisible(entry[0].isIntersecting);
    }, {
      root: document.querySelector("#App"),
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.75,
    });
    io.current.observe(observerRef.current);
    return () => {
      if (io.current) io.current.disconnect();
    };
  }, [isVisible, observerRef]);
  
  if (to) {
    return (
      <NavLink
        ref={observerRef}
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
        ref={observerRef}
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
        ref={observerRef}
        title={tooltip}
        className={`item ${selected ? 'active' : ''} ${className ? className : ''}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
