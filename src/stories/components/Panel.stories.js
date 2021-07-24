import React, { useState } from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Card } from "../../components/Card.jsx";
import { Panel } from "../../components/Panel.jsx";
import { PageLayout } from "../../components/PageLayout.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { Navbar } from "../../components/Navbar.jsx";
import { TabBar, TabBarItem } from "../../components/TabBar.jsx";
import { VStack } from "../../layouts/VStack.jsx";
import { MdMenu } from "react-icons/md";
import { Button } from "../../components/Button.jsx";
import { HStack } from "../../layouts/HStack.jsx";
import { List, ListItem } from "../../components/List.jsx";

const testData = {
  title: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
  items: [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
  ],
};

export default {
  component: Panel,
  title: "Panel",
};

const Template = ({
  title,
  content,
  items,
  styleOverride,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedValue, setSelectedValue] = useState("One");
  
  const selectValue = (value) => {
    if (selectedValue === value) {
      setSelectedValue(null);
      return;
    }
    setSelectedValue(value);
  }

  return (
    <AppContainer styleOverride={styleOverride}>
      <VStack className="overflow-hidden" align="stretch" justify="top" fullHeight={true}>
        <Navbar
          left={
            <>
              <Button
                className="margin-s-right padding-none"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                tooltip="Toggle sidebar panel"
                label={<MdMenu size="1.5rem" />}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                round
                selected={isSidebarOpen}
              />
              <h1>{title}</h1>
            </>
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
        <HStack
          className="overflow-auto"
          align="top"
          justify="stretch"
          fullWidth={true}
          fullHeight={true}
        >
          {
            isSidebarOpen ?
              <Panel className="position-sticky anchor-top margin-none-top width-full width-max-240 height-full overflow-y-auto">
                <List>
                  <ListItem>Hello World</ListItem>
                  <ListItem>Hello World</ListItem>
                  <ListItem>Hello World</ListItem>
                </List>
              </Panel>
            :
              ''
          }
          <PageLayout
            className="overflow-auto"
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
        </HStack>
      </VStack>
    </AppContainer>
  );
}

export const Default = Template.bind({});
Default.args = {
  title: testData.title,
  content: testData.content,
  items: testData.items,
  styleOverride: null,
}

export const WithStyleOverride = Template.bind({});
WithStyleOverride.args = {
  title: testData.title,
  content: testData.content,
  items: testData.items,
  styleOverride: {
    baseFontFamily: "Verdana",
    headerFontFamily: "Georgia",
    fgColor: "cyan",
  }
}
