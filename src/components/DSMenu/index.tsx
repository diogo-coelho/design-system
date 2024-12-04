import { useRef } from 'react'
import { MenuProps } from '@/types/menu'
import DSMenuLink from '../DSMenuLink'
import DSIconButton from '../DSIconButton'
import useOutsideClick from '@/directives/useOutsideClick'
import '@/assets/sass/app.scss'

const DSMenu = (props: MenuProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const getClassName = (mainClass: string): string => {
    return [mainClass, props.viewport ?? '', props.hidden == 'off' ? 'active' : '']
      .toString()
      .replaceAll(',', ' ')
      .trim()
  }

  const isTabletViewport = (): boolean => props.viewport! && props.viewport === 'tablet-view'
  const isMobileViewport = (): boolean => props.viewport! && props.viewport === 'mobile-view'

  const handleClickOutside = () => props.handleOnClose?.({ args: true })
  useOutsideClick({ ref, handler: handleClickOutside })

  return (
    <>
      <nav
        ref={ref}
        className={getClassName('menu-container')}
      >
        <div>
          <ul>
            {props.menuItems &&
              props.menuItems.map((item, index) => (
                <DSMenuLink
                  key={index}
                  href={item.href}
                  noBorders={isTabletViewport()}
                  active={item.active}
                  {...props}
                >
                  {item.label}
                </DSMenuLink>
              ))}
          </ul>

          {isMobileViewport() && (
            <div className='close-button'>
              <DSIconButton
                source={props.closeButton || 'assets/svgs/close_icon.svg'}
                alt='Botão de fechar'
                width={14}
                height={14}
                handleOnClick={(event) => props.handleOnClose?.({ event })}
              ></DSIconButton>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default DSMenu
