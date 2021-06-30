import { useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp, MdArrowUpward } from "react-icons/md";

import { Button } from "../controls/Button";

export function CardToggleButton({
  isVisible,
  cardName,
  toggle
}) {
  return (
    <Button
      tooltip={isVisible ? `Hide ${cardName}` : `Show ${cardName}`}
      className="border-radius-100pct padding-none"
      style={{
        width: "2rem",
        height: "2rem"
      }}
      onClick={toggle}
    >
      {
        isVisible ?
          <MdArrowDropUp size="1.5rem" />
        :
          <MdArrowDropDown size="1.5rem" />
      }
    </Button>
  );
}

export function CardToggleFloatingButton({
  isVisible,
  cardName,
  toggle
}) {
  return (
    <Button
      tooltip={isVisible ? `Hide ${cardName}` : `Show ${cardName}`}
      className="border-radius-100pct padding-none"
      style={{
        width: "2rem",
        height: "2rem"
      }}
      onClick={toggle}
    >
      <MdArrowUpward size="1.5rem" />
    </Button>
  );
}

export function Card({
  className,
  children,
  header,
  body,
  id,
  isFloating,
  isWindowMode,
  toggleFloating,
}) {
  const windowRef = useRef();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseDown = (e) => {
    e.preventDefault();

    if (!isFloating) return;

    const body = document.querySelector('body');
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    pos3 = e.clientX;
    pos4 = e.clientY;

    document.onmouseup = (e) => {
      e.preventDefault();
      document.onmousedown = null;
      document.onmouseup = null;
      document.onmousemove = null;
    }

    document.onmousemove = (e) => {
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      const { left, top } = windowRef.current.getBoundingClientRect();
      if ((left - pos1) >= 0) {
        setX(left - pos1);
      }
      if ((top - pos2) - body.getBoundingClientRect().height >= 0) {
        setY(top - pos2);
      }
    }
  }

  return (
    <div
      ref={windowRef}
      id={id}
      className={`card width-full ${isFloating ? 'position-fixed width-max-480 height-max-640' : ''} ${className ? className : ''}`}
      style={{
        left: isFloating ? `${x}px` : null,
        top: isFloating ? `${y}px` : null
      }}
      onDoubleClick={(e) => isFloating ? toggleFloating(e) : undefined}
      onMouseDown={(e) => isWindowMode ? handleMouseDown(e) : undefined}
    >
      {header}
      {body}
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
