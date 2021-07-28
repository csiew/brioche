import React from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Button } from "../../components/Button.jsx";
import { Card, CardBody } from "../../components/Card.jsx";
import { MdMenu } from "react-icons/md";

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
    hollow: {
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
    disabled: {
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
  hollow,
  iconOnly,
  round,
  disabled,
  href,
  openInNewTab,
}) => {
  return (
    <AppContainer className="padding-xl">
      <Card className="width-max-600 height-min-320">
        <CardBody>
          <Button
            style={style}
            label={label}
            tooltip={tooltip}
            primary={primary}
            hollow={hollow}
            iconOnly={iconOnly}
            round={round}
            disabled={disabled}
            href={href}
            openInNewTab={href}
          />
        </CardBody>
      </Card>
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: false,
  hollow: false,
  iconOnly: false,
  round: false,
  disabled: false,
};

export const Link = Template.bind({});
Link.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: false,
  hollow: false,
  iconOnly: false,
  round: false,
  disabled: false,
  href: "https://clarencesiew.com/",
  openInNewTab: true,
};

export const Primary = Template.bind({});
Primary.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: true,
  hollow: false,
  iconOnly: false,
  round: false,
  disabled: false,
}

export const Hollow = Template.bind({});
Hollow.args = {
  style: null,
  label: testData.label,
  tooltip: testData.tooltip,
  primary: false,
  hollow: true,
  iconOnly: false,
  round: false,
  disabled: false,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  style: {
    width: "2.5rem",
    height: "2.5rem",
  },
  label: <MdMenu size="1.5rem" />,
  tooltip: testData.tooltip,
  primary: true,
  hollow: false,
  iconOnly: true,
  round: true,
  disabled: false,
};
