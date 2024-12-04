import type { Meta, StoryObj } from '@storybook/react'
import DSMenu from '../components/DSMenu'
import imageFile from './assets/svgs/close_icon.svg'
import { fn } from '@storybook/test'

const meta: Meta<typeof DSMenu> = {
  title: 'Componentes/DSMenu',
  component: DSMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    menuItems: {
      control: 'object',
      description: 'Lista de items de menu',
    },
    viewport: {
      control: 'select',
      options: ['mobile-view', 'tablet-view', 'desktop-view'],
      description: 'Visibilidade do menu de acordo com o dispositivo',
    },
    hidden: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Visibilidade do menu',
    },
    closeButton: {
      control: 'text',
      description: 'Caminho da imagem do botão de fechar',
    },
  },
  tags: ['autodocs'],
  args: {
    handleOnClose: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DSMenu>

export const Default: Story = {
  args: {
    viewport: 'mobile-view',
    closeButton: imageFile,
    hidden: 'off',
    menuItems: [
      {
        label: 'Início',
        href: '/',
        active: 'on',
      },
      {
        label: 'Transferência',
        href: '/transferencia',
      },
    ],
  },
}
