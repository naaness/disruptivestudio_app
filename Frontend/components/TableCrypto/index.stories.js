import React from 'react';

import TableCrypto from '.';

// Styles
import "semantic-ui-css/semantic.min.css";
import "../../scss/global.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TableCrypto',
  component: TableCrypto,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TableCrypto {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  cryptos: {
    BTC: {
      NAME: 'BITCOIN',
      ICON: 'bitcoin',
    },
    ETH: {
      NAME: 'ETHEREUM',
      ICON: 'ethereum',
    },
    ADA: {
      NAME: 'CARDANO',
      ICON: 'empire',
    }
  }
};

export const WithValues = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithValues.args = {
  cryptos: {
    BTC: {
      NAME: 'BITCOIN',
      ICON: 'bitcoin',
      price_usd: 200,
      change: 0.09,
    },
    ETH: {
      NAME: 'ETHEREUM',
      ICON: 'ethereum',
      price_usd: 150,
      change: -0.03,
    },
    ADA: {
      NAME: 'CARDANO',
      ICON: 'empire',
      price_usd: 50,
      change: 0.02,
    }
  }
};
