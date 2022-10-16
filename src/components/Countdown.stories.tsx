import { Meta, StoryObj } from '@storybook/react';

import { Countdown, CountdownProps } from './Countdown';

export default {
  title: 'Widgets/Countdown',
  component: Countdown,
  args: {
    title: 'Countdown ⏳',
    totalSeconds: 120,
  },
} as Meta<CountdownProps>;

export const Default: StoryObj<CountdownProps> = {};
