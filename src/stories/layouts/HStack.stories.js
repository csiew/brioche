import React from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Card } from "../../components/Card.jsx";
import { HStack } from "../../layouts/HStack.jsx";

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo.",
};

export default {
  title: "HStack",
  component: HStack,
  argTypes: {
    autoWidth: {
      control: {
        type: "boolean",
        defaultValue: false
      },
    },
    autoHeight: {
      control: {
        type: "boolean",
        defaultValue: false
      },
    },
    align: {
      type: "select",
      options: ['top', 'bottom', 'center', 'stretch', 'space-between'],
      mapping: {
        top: "Top",
        bottom: "Bottom",
        center: "Center",
        stretch: "Stretch",
        spaceBetween: "Space Between",
      },
    },
    justify: {
      type: "select",
      options: ['left', 'right', 'center', 'stretch', 'space-between'],
      mapping: {
        left: "Left",
        right: "Right",
        center: "Center",
        stretch: "Stretch",
        spaceBetween: "Space Between",
      },
    },
  }
};

const Template = ({
  autoWidth,
  autoHeight,
  align,
  justify,
  title,
  content,
}) => {
  return (
    <AppContainer>
      <HStack
        className="height-full"
        autoWidth={autoWidth}
        autoHeight={autoHeight}
        align={align}
        justify={justify}
      >
        <Card title={title} body={content} noStyle />
        <Card title={title} body={content} noStyle />
        <Card title={title} body={content} noStyle />
      </HStack>
    </AppContainer>
  );
}

export const Default = Template.bind({});
Default.args = {
  autoWidth: false,
  autoHeight: false,
  align: "top",
  justify: "stretch",
  title: testData.title,
  content: testData.content,
};
