import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import DSModal from '../components/DSModal'
import imageFile from './assets/images/close_icon.png'

const meta: Meta<typeof DSModal> = {
  title: 'Componentes/DSModal',
  component: DSModal,
  argTypes: {
    children: {
      control: 'object',
      description: 'Tags HTML que compõe o corpo do modal',
    },
    active: {
      control: 'select',
      options: ['on', 'off'],
      description: 'Controla se a exibição do modal está ativa ou não',
    },
    iconSource: {
      control: 'text',
      description: 'Caminho da imagem do botão de fechar o modal',
    },
  },
  tags: ['autodocs'],
  args: {
    handleOnClose: fn(),
  },
}

export default meta
type Story = StoryObj<typeof DSModal>

export const Default: Story = {
  args: {
    children: 'Isso é um modal',
    active: 'on',
    iconSource: imageFile,
    setActive: () => fn,
  },
}
