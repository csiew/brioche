import React from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Table } from "../../components/Table.jsx";

const testData = {
  headerMap: {
    "fruit": {
      name: "Fruit",
      hidden: false,
      sortable: true,
    },
    "color": {
      name: "Color",
      hidden: false,
      sortable: true,
    },
    "bag_friendly": {
      name: "Bag Friendly",
      hidden: true,
      sortable: true,
    },
    "like_dislike": {
      name: "Like/Dislike",
      hidden: false,
      sortable: true,
    },
    "created_at": {
      name: "Created At",
      hidden: false,
      sortable: true,
    },
  },
  contentMap: [
    {
      "fruit": "Apple",
      "color": "red",
      "bag_friendly": true,
      "like_dislike": true,
      "created_at": new Date().getTime()
    },
    {
      "fruit": "Orange",
      "color": "orange",
      "bag_friendly": false,
      "like_dislike": true,
      "created_at": new Date().getTime()
    },
    {
      "fruit": "Pineapple",
      "color": "yellow",
      "bag_friendly": false,
      "like_dislike": false,
      "created_at": new Date().getTime()
    },
    {
      "fruit": "Banana",
      "color": "yellow",
      "bag_friendly": true,
      "like_dislike": false,
      "created_at": new Date().getTime()
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
  contentReducer,
}) => {
  return (
    <AppContainer className="padding-xl">
      <Table
        headerMap={JSON.stringify(headerMap)}
        contentMap={JSON.stringify(contentMap)}
        contentReducer={contentReducer}
        stickyHeader
      />
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  headerMap: testData.headerMap,
  contentMap: testData.contentMap,
  contentReducer: null,
}

export const WithReducer = Template.bind({});
WithReducer.args = {
  headerMap: testData.headerMap,
  contentMap: testData.contentMap,
  contentReducer: (entry) => {
    return {
      "fruit": entry.fruit,
      "color": <span style={{ color: entry.color, background: "black", padding: "0.25rem", borderRadius: "8px" }}>{entry.color}</span>,
      "bag_friendly": entry.bag_friendly ? "Yes" : "No",
      "like_dislike": entry.like_dislike ? "Like" : "Dislike",
      "created_at": new Date(entry.created_at).toLocaleDateString(),
    }
  },
}
