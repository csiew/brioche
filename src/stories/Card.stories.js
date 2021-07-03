import React from "react";
import { Card, CardTitle, CardBody } from "../components/Card.jsx";

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
};

export default {
  title: "Card",
  component: Card,
  argTypes: {
    title: {
      control: {
        type: 'text',
        defaultValue: "Card Title",
      },
    },
    content: {
      control: {
        type: 'text',
        defaultValue: "Card content",
      },
    },
    noBody: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  }
}

const Template = ({
  title,
  content,
}) => {
  return (
    <Card className="width-max-480">
      <CardTitle>
        <h2>{title}</h2>
      </CardTitle>
      <CardBody>
        {content}
      </CardBody>
    </Card>
  );
};

const TemplateWithoutTitle = ({
  content,
}) => {
  return (
    <Card className="width-max-480">
      <CardBody>
        {content}
      </CardBody>
    </Card>
  );
};

const TemplateWithoutBody = ({
  title,
  noBody,
}) => {
  return (
    <Card className="width-max-480">
      <CardTitle noBody={noBody}>
        <h2>{title}</h2>
      </CardTitle>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: testData.title,
  content: testData.content,
};

export const BodyOnly = TemplateWithoutTitle.bind({});
BodyOnly.args = {
  content: testData.content,
};

export const TitleOnly = TemplateWithoutBody.bind({});
TitleOnly.args = {
  title: testData.title,
  noBody: true,
};
