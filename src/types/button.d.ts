import { ReactNode, ButtonHTMLAttributes } from 'react'

export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'black'

export type Size = 'small' | 'medium' | 'large'

export type Outline = 'on' | 'off'

export type ButtonTypeAttribute = 'reset' | 'button' | 'submit'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  type?: ButtonTypeAttribute
  disabled?: boolean
  outline?: Outline
  handleOnClick?: (data: { args?: T | T[]; event: MouseEvent<HTMLButtonElement, MouseEvent> }) => T
}
