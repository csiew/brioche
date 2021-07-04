import React from "react";
import { AppContainer } from "../components/AppContainer.jsx";
import { Table } from "../components/Table.jsx";

const testData = {
  headerMap: {
    "fruit": "Fruit",
    "like_dislike": "Like/Dislike"
  },
  contentMap: [
    {
      "fruit": "Apple",
      "like_dislike": "Like"
    },
    {
      "fruit": "Orange",
      "like_dislike": "Like"
    },
    {
      "fruit": "Pineapple",
      "like_dislike": "Dislike"
    },
    {
      "fruit": "Banana",
      "like_dislike": "Dislike"
    },
  ]
};

export default {
  title: "Table",
  component: Table,
};

const Template = ({
  headerMap,
  contentMap,
}) => {
  return (
    <AppContainer className="padding-xl">
      <Table
        headerMap={JSON.stringify(headerMap)}
        contentMap={JSON.stringify(contentMap)}
      />
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  headerMap: testData.headerMap,
  contentMap: testData.contentMap,
}
