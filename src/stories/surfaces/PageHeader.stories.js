import React from "react";
import { doImport } from "../AssetImporter";

import { PageHeader } from "../../components/surfaces/PageHeader.jsx";

doImport();

const testData = {
  title: "Lorem ipsum",
};

export default {
  component: PageHeader,
  title: "Page Header",
  argTypes: {
    title: {
      control: {
        type: "text",
        defaultValue: "Hello World"
      },
    },
    isItalic: {
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
    isTextured: {
      control: {
        type: "boolean",
        defaultValue: false,
      },
    },
  }
};

const Template = ({
  title,
  isTextured,
  isItalic,
}) => {
  return (
    <PageHeader
      title={title}
      isTextured={isTextured}
      isItalic={isItalic}
    />
  );
}

export const Default = Template.bind({});
Default.args = {
   title: testData.title,
   isTextured: false,
   isItalic: false,
};

export const Italic = Template.bind({});
Italic.args = {
   title: testData.title,
   isTextured: false,
   isItalic: true,
};

export const Textured = Template.bind({});
Textured.args = {
   title: testData.title,
   isTextured: true,
   isItalic: false,
};

export const ItalicTextured = Template.bind({});
ItalicTextured.args = {
   title: testData.title,
   isTextured: true,
   isItalic: true,
};
