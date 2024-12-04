export interface MenuItem {
  href: string
  label: string
  active?: Active
}

type ViewPort = 'mobile-view' | 'tablet-view' | 'desktop-view'

export interface MenuProps {
  menuItems?: MenuItem[]
  viewport?: ViewPort
  hidden?: Active
  closeButton?: string
  handleOnClose?: (data: { args?: T | T[]; event?: MouseEvent<HTMLButtonElement, MouseEvent> }) => T
}
