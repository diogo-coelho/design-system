import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import imageFile from './assets/images/menu_icon.png'

import DSIconButton from '../components/DSIconButton'

const meta: Meta<typeof DSIconButton> = {
  title: 'Componentes/DSIconButton',
  component: DSIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    source: {
      control: 'text',
      description: 'Imagem que será exibida no botão de ícone',
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo que será exibido',
    },
    width: {
      control: 'number',
      description: 'Tamanho da imagem do botão',
    },
    height: {
      control: 'number',
      description: 'Altura da imagem do botão',
    },
    backgroundColor: {
      control: 'text',
      description: 'Cor de fundo do botão de ícone',
    },
  },
  args: {
    handleOnClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DSIconButton>

export const Default: Story = {
  args: {
    source: imageFile,
    alt: 'Menu de ícone',
    width: 15,
    backgroundColor: 'light-grey',
  },
}
