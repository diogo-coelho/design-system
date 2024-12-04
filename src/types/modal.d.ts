export interface ModalProps {
  children: ReactNode
  active: Active
  iconSource?: string
  setActive: (active: boolean) => void
  handleOnClose?: (data: { args?: T | T[]; event: MouseEvent<HTMLButtonElement, MouseEvent> }) => T
}
