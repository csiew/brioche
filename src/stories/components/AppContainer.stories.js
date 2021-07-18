import React from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { PageLayout } from "../../components/PageLayout.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Card } from "../../components/Card.jsx";

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
};

export default {
  component: AppContainer,
  title: "App Container",
};

const Template = ({
  title,
  content,
  styleOverride,
}) => {
  return (
    <AppContainer styleOverride={styleOverride}>
      <PageLayout
        header={
          <PageHeader title={title} isItalic={false} isTextured={false} />
        }
        main={
          <>
            <Card title={title} body={content} />
            <Card title={title} body={content} />
            <Card title={title} body={content} />
          </>
        }
      />
    </AppContainer>
  );
}

export const Default = Template.bind({});
Default.args = {
  title: testData.title,
  content: testData.content,
  styleOverride: null,
}

export const WithStyleOverride = Template.bind({});
WithStyleOverride.args = {
  title: testData.title,
  content: testData.content,
  styleOverride: {
    baseFontFamily: "Verdana",
    headerFontFamily: "Georgia",
    fgColor: "cyan",
  }
}
