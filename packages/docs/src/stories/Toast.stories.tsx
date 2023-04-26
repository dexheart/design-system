import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Effects/Toast',
  component: Toast,
  args: {},
  decorators: [],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
