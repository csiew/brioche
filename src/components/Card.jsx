import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Button } from "./Button.jsx";
import "../App.css";

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
      className={`border-radius-100pct padding-none ${className ? className : ''}`}
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

export function Card({
  className,
  headerClassName,
  bodyClassName,
  children,
  title,
  body,
  id,
  collaseButtonTitle,
  collapseButtonClassName,
  collapseButtonStyle,
  isCollapsible,
  isCollapsedValue,
  isNotCollapsedValue,
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      id={id}
      className={`card width-full ${className ? className : ''}`}
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
                  cardName={collaseButtonTitle}
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
        ((body !== null) && (isCollapsed === false)) ?
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
