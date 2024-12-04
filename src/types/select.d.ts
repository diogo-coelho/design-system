import { InputProps } from './input'

export interface SelectProps extends InputProps {
  options?: string[]
  selectedValue?: string
  error?: string
  suffix?: string
  handleOnSelect?: (data: { args?: T | T[]; event: ChangeEvent<HTMLInputElement> }) => T
  handleOnSelectClick?: (data: { args?: T | T[]; event: ChangeEvent<HTMLInputElement> }) => T
}
