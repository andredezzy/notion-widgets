import { Meta, StoryObj } from '@storybook/react';

import { Counter, CounterProps } from './Counter';

export default {
  title: 'Widgets/Counter',
  component: Counter,
  args: {
    title: 'Counter 🔢',
  },
} as Meta<CounterProps>;

export const Default: StoryObj<CounterProps> = {};
