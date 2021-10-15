import React from 'react';

import CardCrypto from '.';

// Styles
import "semantic-ui-css/semantic.min.css";
import "../../scss/global.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CardCrypto',
  component: CardCrypto,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardCrypto {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  loading: true,
  name: '',
  value: ''
};

export const WithValue = Template.bind({});
WithValue.args = {
  loading: false,
  name: 'BITCOIN',
  value: 1234.56
};
