import React from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { TextAreaBox } from "../../components/TextAreaBox.jsx";

const testData = {
  tooltip: "Lorem ipsum",
  placeholder: "Lorem ipsum",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris placerat lectus vel dui maximus sollicitudin. Morbi quis mi in risus rhoncus maximus ut sit amet nibh. Integer volutpat, elit sollicitudin vulputate suscipit, quam neque commodo dolor, et ullamcorper libero erat ut justo. Maecenas accumsan dolor quis aliquam condimentum. Quisque accumsan in neque et sollicitudin. Maecenas ultrices purus risus, ac faucibus lorem placerat at. Curabitur varius metus cursus lectus rhoncus facilisis. Aliquam tincidunt lacus nec enim efficitur interdum. Quisque condimentum nisi non maximus luctus. Duis semper neque mattis tortor tristique, id bibendum dolor bibendum. Maecenas ultrices elit risus, et convallis est condimentum vel. Duis rhoncus tempus venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum ante nisi, a ullamcorper tellus ullamcorper eu.",
};

export default {
  title: "Text Area Box",
  component: TextAreaBox,
  argTypes: {
    tooltip: {
      control: {
        type: "text",
        defaultValue: "Title text",
      }
    },
    placeholder: {
      control: {
        type: "text",
        defaultValue: "Placeholder text",
      }
    },
  }
};

const Template = ({
  tooltip,
  placeholder,
  value,
}) => {
  return (
    <AppContainer className="width-max-480 padding-xl">
      <TextAreaBox
        tooltip={tooltip}
        placeholder={placeholder}
        value={value}
      />
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  tooltip: testData.tooltip,
  placeholder: testData.placeholder,
  value: testData.content,
};
