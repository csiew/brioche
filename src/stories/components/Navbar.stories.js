import React, { useState } from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Navbar } from "../../components/Navbar.jsx";
import { TabBar, TabBarItem } from "../../components/TabBar.jsx";

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
  component: Navbar,
  title: "Navbar",
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
      <Navbar
        left={
          <h1>{title}</h1>
        }
        right={
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
        }
      >
      </Navbar>
    </AppContainer>
  );
}

export const Default = Template.bind({});
Default.args = {
   title: testData.title,
};
