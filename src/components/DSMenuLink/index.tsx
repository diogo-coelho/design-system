import { MenuLinkProps } from '@/types/menu_link'
import '@/assets/sass/app.scss'

const DSMenuLink = (props: MenuLinkProps) => {
  const getClassName = (): string => {
    return [
      `menu-link-container`,
      props.noBorders ? `no-borders` : ``,
      props.active === 'on' ? `active` : ``,
    ]
      .toString()
      .replaceAll(',', ' ')
      .trim()
  }

  return (
    <>
      <li className={getClassName()}>
        <a href={props.href}>{props.children}</a>
      </li>
    </>
  )
}

export default DSMenuLink
