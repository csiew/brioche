import React from "react";
import { AppContainer } from "../components/AppContainer.jsx";
import { PageLayout } from "../components/PageLayout.jsx";
import { PageHeader } from "../components/PageHeader.jsx";
import { Card } from "../components/Card.jsx";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
};

export default {
  title: "Page Layout",
  component: PageLayout,
  argTypes: {
    isArticleView: {
      control: {
        type: "boolean",
        defaultValue: false
      },
    },
  }
};

const Template = ({
  title,
  content,
  header,
  main,
  sidebar,
  isArticleView,
}) => {
  return (
    <AppContainer>
      <PageLayout
        header={
          header === null ?
            null
          :
            <PageHeader title={title} isItalic={true} isTextured={false} />
        }
        main={
          main === null ?
            null
          :
            <>
              <Card title={title} body={content} />
              <Card title={title} body={content} />
              <Card title={title} body={content} />
            </>
        }
        sidebar={
          sidebar === null ?
            null
          :
            <>
              <Card
                title={title}
                body={content.slice(0, 255)}
                isCollapsible
                collapseButtonClassName="border-radius-100pct padding-none"
                collapseButtonStyle={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                isCollapsedValue={<MdArrowDropDown size="1.5rem" />}
                isNotCollapsedValue={<MdArrowDropUp size="1.5rem" />}
              />
              <Card
                title={title}
                body={content.slice(0, 255)}
                isCollapsible
                collapseButtonClassName="card-border-radius padding-xs font-scale-xs"
                isCollapsedValue="Show"
                isNotCollapsedValue="Hide"
              />
            </>
        }
        isArticleView={isArticleView}
      />
    </AppContainer>
  );
}

const ArticleTemplate = ({
  title,
  content,
  isArticleView,
}) => {
  return (
    <AppContainer>
      <PageLayout
        header={
          <PageHeader title={title} isItalic={true} isTextured={false} />
        }
        main={
          <>
            <Card title={title} body={content} noStyle />
            <Card title={title} body={content} noStyle />
            <Card title={title} body={content} noStyle />
          </>
        }
        sidebar={
          <>
            <Card
              title={title}
              body={content.slice(0, 255)}
              isCollapsible
              collapseButtonClassName="border-radius-100pct padding-none"
              collapseButtonStyle={{
                width: "2.5rem",
                height: "2.5rem",
              }}
              isCollapsedValue={<MdArrowDropDown size="1.5rem" />}
              isNotCollapsedValue={<MdArrowDropUp size="1.5rem" />}
              noStyle
            />
            <Card
              title={title}
              body={content.slice(0, 255)}
              isCollapsible
              collapseButtonClassName="card-border-radius padding-xs font-scale-xs"
              isCollapsedValue="Show"
              isNotCollapsedValue="Hide"
              noStyle
            />
          </>
        }
        isArticleView={isArticleView}
      />
    </AppContainer>
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

export const ArticleMode = ArticleTemplate.bind({});
ArticleMode.args = {
  title: testData.title,
  content: testData.content,
  isArticleView: true,
};
