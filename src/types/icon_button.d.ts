export type ColorTypeEnum =
  | 'green'
  | 'light-green'
  | 'light-green-alpha'
  | 'red'
  | 'dark-grey'
  | 'light-grey'
  | 'grey'

export interface IconButtonProps {
  source: string
  alt?: string
  width?: number
  height?: number
  backgroundColor?: ColorTypeEnum | string
  priority?: boolean
  handleOnClick?: (data: { args?: T | T[]; event: MouseEvent<HTMLButtonElement, MouseEvent> }) => T
}
