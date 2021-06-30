import React from "react";
import { doImport } from "../AssetImporter";

import { Button } from "../../components/controls/Button.jsx";
import { MdMenu } from "react-icons/md";

doImport();

const testData = {
  label: "Lorem ipsum",
  tooltip: "Lorem ipsum",
};

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: {
      control: {
        type: "text",
        defaultValue: "Button text",
      }
    },
    tooltip: {
      control: {
        type: "text",
        defaultValue: "Tooltip text",
      }
    },
    onClick: { action: "clicked" },
    primary: {
      control: {
        type: "boolean",
        defaultValue: false,
      }
    },
    iconOnly: {
      control: {
        type: "boolean",
        defaultValue: false,
      }
    },
    round: {
      control: {
        type: "boolean",
        defaultValue: false,
      }
    },
  }
};

const Template = ({
  style,
  label,
  tooltip,
  primary,
  iconOnly,
  round
}) => {
  return (
    <Button
      style={style}
      label={label}
      tooltip={tooltip}
      primary={primary}
      iconOnly={iconOnly}
      round={round}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: false,
  iconOnly: false,
  round: false,
};

export const Primary = Template.bind({});
Primary.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: true,
  iconOnly: false,
  round: false,
}

export const IconOnly = Template.bind({});
IconOnly.args = {
  style: {
    width: "2.5rem",
    height: "2.5rem",
  },
  label: <MdMenu size="1.5rem" />,
  tooltip: testData.tooltip,
  primary: true,
  iconOnly: true,
  round: true,
};
