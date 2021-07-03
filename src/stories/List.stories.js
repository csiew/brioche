import React from "react";
import { Card, CardTitle, CardBody } from "../components/Card.jsx";
import { List, ListItem } from "../components/List.jsx";

const testData = {
  title: "Lorem ipsum",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Mauris placerat lectus vel dui maximus sollicitudin.",
    "Morbi quis mi in risus rhoncus maximus ut sit amet nibh.",
    "Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo.",
    "Maecenas accumsan dolor quis aliquam condimentum.",
    "Quisque accumsan in neque et sollicitudin.",
    "Maecenas ultrices purus risus, ac faucibus lorem placerat at.",
    "Curabitur varius metus cursus lectus rhoncus facilisis.",
    "Aliquam tincidunt lacus nec enim efficitur interdum.",
    "Quisque condimentum nisi non maximus luctus.",
    "Duis semper neque mattis tortor tristique, id bibendum dolor bibendum.",
    "Maecenas ultrices elit risus, et convallis est condimentum vel.",
    "Duis rhoncus tempus venenatis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu."
  ],
};

export default {
  title: "List",
  component: List,
};

const Template = ({
  edgeToEdge,
}) => {
  return (
    <Card className="width-max-480">
      <CardTitle>
        <h2>{testData.title}</h2>
      </CardTitle>
      <CardBody className="padding-none">
        <List edgeToEdge={edgeToEdge}>
          {
            testData.content.map(item => {
              return (
                <ListItem key={item} tooltip={item}>
                  {item.slice(0,48)}...
                </ListItem>
              );
            })
          }
        </List>
      </CardBody>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = {
  edgeToEdge: false,
}

export const EdgeToEdge = Template.bind({});
EdgeToEdge.args = {
  edgeToEdge: true,
}