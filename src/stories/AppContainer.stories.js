import React from "react";
import { AppContainer } from "../components/AppContainer.jsx";

export default {
  component: AppContainer,
  title: "App Container",
};

const Template = () => {
  return (
    <AppContainer>
      <h1>Hello World</h1>
    </AppContainer>
  );
}

export const Default = Template.bind({});
