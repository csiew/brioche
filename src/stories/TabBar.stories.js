import React, { useState } from "react";
import { AppContainer } from "../components/AppContainer.jsx";
import { TabBar, TabBarItem } from "../components/TabBar.jsx";

const testData = {
  items: [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
  ],
};

export default {
  title: "Tab Bar",
  component: TabBar,
};

const Template = () => {
  const [selectedValue, setSelectedValue] = useState("One");
  
  const selectValue = (value) => {
    if (selectedValue === value) {
      setSelectedValue(null);
      return;
    }
    setSelectedValue(value);
  }

  return (
    <AppContainer className="bg-color width-max-768 padding-xl">
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
    </AppContainer>
  );
};

export const Default = Template.bind({});
