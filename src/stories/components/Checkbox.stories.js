import React, { useState } from "react";
import { AppContainer } from "../../components/AppContainer.jsx";
import { Card, CardBody } from "../../components/Card.jsx";
import { Checkbox } from "../../components/Checkbox.jsx";

export default {
  title: "Checkbox",
  component: Checkbox,
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
        defaultValue: "This is a checkbox",
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
          <Checkbox label={label} state={state} disabled={disabled} onClick={handleToggle} />
          <div className="margin-s-top">The toggle is <strong>{state ? 'ON' : 'OFF'}</strong></div>
        </CardBody>
      </Card>
    </AppContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "This is a checkbox",
};
