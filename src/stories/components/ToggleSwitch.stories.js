import React, { useState } from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { ToggleSwitch } from "../../components/ToggleSwitch.jsx";
import { Card, CardBody } from "../../components/Card.jsx";

export default {
  title: "Toggle Switch",
  component: ToggleSwitch,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
        defaultValue: false,
      }
    },
    label: {
      control: {
        type: "text",
        defaultValue: "This is a toggle switch",
      }
    },
  }
};

const Template = ({
  disabled,
  label,
}) => {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState(!state);
  }

  return (
    <AppContainer className="padding-xl">
      <Card className="width-max-600 height-min-320">
        <CardBody>
          <ToggleSwitch label={label} state={state} disabled={disabled} onClick={handleToggle} />
          <div className="margin-s-top">The toggle is <strong>{state ? 'ON' : 'OFF'}</strong></div>
        </CardBody>
      </Card>
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "This is a toggle switch",
};
