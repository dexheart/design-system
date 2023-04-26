import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Effects/Tooltip',
  component: Tooltip,
  args: {
    placement: 'bottom',
  },
  argTypes: {
    placement: {
      options: ['top', 'left', 'right', 'bottom'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    title: 'Basic tooltip example',
  },
}

export const Arrow: StoryObj<TooltipProps> = {
  args: {
    title: 'Arrow tooltip example',
    arrow: true,
  },
}
