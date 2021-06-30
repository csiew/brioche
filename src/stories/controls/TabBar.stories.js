import React, { useState } from "react";
import { doImport } from "../AssetImporter";

import { TabBar, TabBarItem } from "../../components/controls/TabBar.jsx";

doImport();

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
    <div className="bg-color width-full width-max-1024 height-full padding-xl">
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
    </div>
  );
};

export const Default = Template.bind({});
