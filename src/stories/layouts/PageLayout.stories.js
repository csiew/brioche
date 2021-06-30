import React from "react";
import { doImport } from "../AssetImporter";

import { DynamicPageView } from "../../components/layouts/PageLayout.jsx";
import { PageHeader } from "../../components/surfaces/PageHeader.jsx";
import { Card, CardBody, CardTitle } from "../../components/surfaces/Card.jsx";

doImport();

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
};

export default {
  title: "Dynamic Page View",
  component: DynamicPageView,
};

const Template = ({
  title,
  content,
  header,
  main,
  sidebar,
}) => {
  return (
    <DynamicPageView
      header={
        header === null ?
          null
        :
          <PageHeader title={title} isItalic={true} isTextured={true} />
      }
      main={
        main === null ?
          null
        :
          <>
            <Card
              header={
                <CardTitle>
                  <h3>{title}</h3>
                </CardTitle>
              }
              body={
                <CardBody>
                  {content}
                </CardBody>
              }
            />
            <Card
              header={
                <CardTitle>
                  <h3>{title}</h3>
                </CardTitle>
              }
              body={
                <CardBody>
                  {content}
                </CardBody>
              }
            />
            <Card
              header={
                <CardTitle>
                  <h3>{title}</h3>
                </CardTitle>
              }
              body={
                <CardBody>
                  {content}
                </CardBody>
              }
            />
          </>
      }
      sidebar={
        sidebar === null ?
          null
        :
          <>
            <Card
              header={
                <CardTitle>
                  <h3>{title}</h3>
                </CardTitle>
              }
              body={
                <CardBody>
                  {content.slice(0,255)}
                </CardBody>
              }
            />
            <Card
              header={
                <CardTitle>
                  <h3>{title}</h3>
                </CardTitle>
              }
              body={
                <CardBody>
                  {content.slice(0,255)}
                </CardBody>
              }
            />
          </>
      }
    />
  );
}

export const Default = Template.bind({});
Default.args = {
  title: testData.title,
  content: testData.content,
};

export const WithoutHeader = Template.bind({});
WithoutHeader.args = {
  title: testData.title,
  content: testData.content,
  header: null,
};

export const WithoutSidebar = Template.bind({});
WithoutSidebar.args = {
  title: testData.title,
  content: testData.content,
  sidebar: null,
};

export const WithoutMainContent = Template.bind({});
WithoutMainContent.args = {
  title: testData.title,
  content: testData.content,
  main: null,
};
