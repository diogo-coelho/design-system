import { ReactNode } from 'react'

export interface MenuLinkProps {
  href: string
  noBorders?: boolean
  children?: ReactNode
  active?: 'on' | 'off'
}
