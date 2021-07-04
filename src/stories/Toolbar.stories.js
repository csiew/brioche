import React, { useState } from "react";
import { AppContainer } from "../components/AppContainer.jsx";
import { Toolbar } from "../components/Toolbar.jsx";
import { TabBar, TabBarItem } from "../components/TabBar.jsx";

const testData = {
  title: "Lorem ipsum",
  items: [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
  ],
};

export default {
  component: Toolbar,
  title: "Toolbar",
  argTypes: {
    title: {
      control: {
        type: "text",
        defaultValue: "Hello World"
      },
    },
  }
};

const Template = ({
  title,
}) => {
  const [selectedValue, setSelectedValue] = useState("One");
  
  const selectValue = (value) => {
    if (selectedValue === value) {
      setSelectedValue(null);
      return;
    }
    setSelectedValue(value);
  }

  return (
    <AppContainer>
      <Toolbar>
        <h2>{title}</h2>
        <TabBar>
          {
            testData.items.map(item => {
              return (
                <TabBarItem
                  key={item}
                  onClick={() => selectValue(item)}
                  selected={selectedValue === item}
                >
                  {item}
                </TabBarItem>
              );
            })
          }
        </TabBar>
      </Toolbar>
    </AppContainer>
  );
}

export const Default = Template.bind({});
Default.args = {
   title: testData.title,
};
