import React from 'react';

import FormBalance from '.';

// Styles
import "semantic-ui-css/semantic.min.css";
import "../../scss/global.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/FormBalance',
  component: FormBalance,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onGetBalance: { action: "clicked" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <FormBalance {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  loading: false
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true
};
