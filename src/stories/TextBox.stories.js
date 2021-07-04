import React from "react";
import { TextBox } from "../components/TextBox.jsx";

const testData = {
  label: "Lorem ipsum",
  tooltip: "Lorem ipsum",
  placeholder: "Lorem ipsum"
};

export default {
  title: "Text Box",
  component: TextBox,
  argTypes: {
    label: {
      control: {
        type: "text",
        defaultValue: "Label text",
      }
    },
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
  label,
  tooltip,
  placeholder,
  type,
}) => {
  return (
    <div className="width-max-320">
      <TextBox
        label={label}
        tooltip={tooltip}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export const Text = Template.bind({});
Text.args = {
  label: testData.label,
  tooltip: testData.tooltip,
  placeholder: testData.placeholder,
  type: "text",
};

export const TextWithoutLabel = Template.bind({});
TextWithoutLabel.args = {
  label: null,
  tooltip: testData.tooltip,
  placeholder: testData.placeholder,
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  tooltip: "Enter your password here",
  placeholder: "Password",
  type: "password",
};
