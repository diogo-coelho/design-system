import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import DSButton from '../components/DSButton'

const meta: Meta<typeof DSButton> = {
  title: 'Componentes/DSButton',
  component: DSButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
      description: 'Controla a variação de cores de fundo e da fonte do botão',
    },
    disabled: {
      control: 'boolean',
      description: 'Controla se o botão vai estar habilitado ou desabilitado',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Controla o tamanho máximo do botão',
    },
  },
  args: {
    handleOnClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DSButton>

export const Default: Story = {
  args: {
    variant: 'primary',
    children: 'Default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Adicionar Transação',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Adicionar Nova Transação',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
}
