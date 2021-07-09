import React from "react";
import { Card, CardBody, CardTitle } from "./Card.jsx";
import { List, ListItem } from "./List.jsx";
import "../App.css";

export function Table({
  className,
  style,
  headerMap,
  contentMap,
  contentReducer,
  stickyHeader,
}) {
  return (
    <Card noBody className={`position-sticky anchor-top ${className ? className : ''}`} style={style}>
      <CardTitle className={`position-sticky anchor-top padding-none bg-as-fg-color bg-color-accent-primary card-border-top-radius font-weight-700 ${stickyHeader ? 'position-sticky anchor-top' : ''}`}>
        <div className="width-full grid grid-auto-flow-column">
          {
            Object.entries(JSON.parse(headerMap)).map(keyMap => {
              if (!keyMap[1].hidden) {
                return (
                  <span key={`header-${keyMap[0]}`} className="padding-xs padding-s-left padding-s-right">
                    {keyMap[1].name}
                  </span>
                );
              }
            })
          }
        </div>
      </CardTitle>
      <CardBody className="grid grid-col-1 padding-none">
        <List edgeToEdge lineSeparated className="padding-none-top padding-xs-bottom">
          {
            JSON.parse(contentMap).map(entry => {
              return (
                <ListItem className="grid grid-auto-flow-column padding-none">
                  {
                    Object.entries(contentReducer ? contentReducer(entry) : entry).map(contentEntry => {
                      if (!JSON.parse(headerMap)[contentEntry[0]].hidden) {
                        return (
                          <span className="padding-xs padding-s-left padding-s-right">
                            {contentEntry[1]}
                          </span>
                        );
                      }
                    })
                  }
                </ListItem>
              );
            })
          }
        </List>
      </CardBody>
    </Card>
  );
}
