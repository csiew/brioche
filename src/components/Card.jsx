import React, { useState } from "react";
import { Button } from "./Button.jsx";
import "../App.css";

export function Card({
  className,
  headerClassName,
  bodyClassName,
  children,
  title,
  body,
  id,
  collapseButtonClassName,
  collapseButtonStyle,
  isCollapsible,
  isCollapsedValue,
  isNotCollapsedValue,
  noStyle,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      id={id}
      className={`card width-full ${noStyle ? 'no-style' : ''} ${className ? className : ''}`}
    >
      {
        title ?
          <CardTitle className={`${headerClassName ? headerClassName : ''} ${(isCollapsible === true && isCollapsed === true) ? 'card-border-bottom-radius hug-bottom' : ''}`}>
            <h2>{title}</h2>
            {
              isCollapsible ?
                <CardCollapseButton
                  className={collapseButtonClassName}
                  style={collapseButtonStyle}
                  cardName={title}
                  isCollapsed={isCollapsed}
                  toggle={() => setIsCollapsed(!isCollapsed)}
                  isCollapsedValue={isCollapsedValue}
                  isNotCollapsedValue={isNotCollapsedValue}
                />
              :
                ''
            }
          </CardTitle>
        :
          ''
      }
      {
        (body && isCollapsed === false) ?
          <CardBody className={bodyClassName ? bodyClassName : ''}>
            {body}
          </CardBody>
        :
          ''
      }
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  noBody,
}) {
  return (
    <div className={`title width-full ${className ? className : ''} ${noBody ? 'card-border-bottom-radius hug-bottom' : ''}`}>
      {children}
    </div>
  );
}

export function CardBody({
  className,
  children
}) {
  return (
    <div className={`body width-full ${className ? className : ''}`}>
      {children}
    </div>
  );
}

export function CardCollapseButton({
  className,
  style,
  isCollapsed,
  cardName,
  toggle,
  isCollapsedValue,
  isNotCollapsedValue,
}) {
  return (
    <Button
      tooltip={isCollapsed ? `Hide ${cardName}` : `Show ${cardName}`}
      className={className}
      style={style}
      onClick={toggle}
      label={
        isCollapsed ?
          isCollapsedValue
        :
          isNotCollapsedValue
      }
    />
  );
}
