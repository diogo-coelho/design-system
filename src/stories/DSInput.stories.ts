import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import DSInput from '../components/DSInput'
import imageFile from './assets/images/arrow_drop_down.png'

const meta: Meta<typeof DSInput> = {
  title: 'Componentes/DSInput',
  component: DSInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'text',
      description: 'Tipo do input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do input',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
    },
    currentValue: {
      control: 'text',
      description: 'Valor do input',
    },
    inputSize: {
      control: 'select',
      options: ['small', 'normal', 'medium', 'large', 'full'],
      description: 'Tamanho do input',
    },
    align: {
      control: 'select',
      options: ['center', 'left', 'right'],
      description: 'Alinhamento do texto dentro do input',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro do input',
    },
    suffix: {
      control: 'text',
      description: 'Nome da imagem do ícone',
    },
  },
  args: {
    handleOnClick: fn(),
    handleOnChange: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DSInput>

export const Default: Story = {
  args: {
    type: 'text',
  },
}

export const WithIcon: Story = {
  args: {
    type: 'text',
    suffix: imageFile,
  },
}
