import { Meta, StoryObj } from '@storybook/react';

import { Timer, TimerProps } from './Timer';

export default {
  title: 'Widgets/Timer',
  component: Timer,
  args: {
    title: 'Timer ⏲️',
  },
} as Meta<TimerProps>;

export const Default: StoryObj<TimerProps> = {};
