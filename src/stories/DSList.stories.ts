import type { Meta, StoryObj } from '@storybook/react'
import DSList from '../components/DSList'

const meta: Meta<typeof DSList> = {
  title: 'Componentes/DSList',
  component: DSList,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DSList>

export const Default: Story = {
  args: {
    items: [
      { title: 'Transferência', value: -50, date: new Date() },
      { title: 'Depósito', value: 80, date: new Date() },
      { title: 'Transferência', value: 120, date: new Date() },
    ],
  },
}
