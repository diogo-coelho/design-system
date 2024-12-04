import type { Meta, StoryObj } from '@storybook/react'
import DSMenuLink from '../components/DSMenuLink'

const meta: Meta<typeof DSMenuLink> = {
  title: 'Componentes/DSMenuLink',
  component: DSMenuLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DSMenuLink>

export const Default: Story = {
  args: {
    href: '/',
    children: 'Link de Menu',
  },
}
