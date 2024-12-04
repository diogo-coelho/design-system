import type { Meta, StoryObj } from '@storybook/react'
import DSSelect from '../components/DSSelect'
import imageFile from './assets/images/arrow_drop_down.png'

const meta: Meta<typeof DSSelect> = {
  title: 'Componentes/DSSelect',
  component: DSSelect,
  argTypes: {
    options: {
      control: 'text',
      description: 'Lista de opções que serão exibidas no dropdown de select',
    },
    selectedValue: {
      control: 'text',
      description: 'Valor selecionado',
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro',
    },
    suffix: {
      control: 'text',
      description: 'Caminho da imagem de seta',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DSSelect>

export const Default: Story = {
  args: {
    placeholder: 'Selecione o tipo de transação',
    suffix: imageFile,
    options: ['Câmbio de Moeda', 'DOC/TED', 'Empréstimo e Financiamento'],
  },
}

export const SelectedValue: Story = {
  args: {
    placeholder: 'Selecione o tipo de transação',
    selectedValue: 'DOC/TED',
    suffix: imageFile,
    options: ['Câmbio de Moeda', 'DOC/TED', 'Empréstimo e Financiamento'],
  },
}
