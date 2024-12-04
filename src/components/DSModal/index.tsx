import { useRef } from 'react'
import DSIconButton from '../DSIconButton'
import { ModalProps } from '@/types/modal'
import useOutsideClick from '@/directives/useOutsideClick'
import '@/assets/sass/app.scss'

const DSModal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const getClassName = (mainClass: string): string => {
    return [mainClass, props.active === 'on' ? `active` : ``].toString().replaceAll(',', ' ').trim()
  }

  const closeModal = (event?: MouseEvent): void => {
    props.setActive(false)
    setTimeout(() => props.handleOnClose?.({ event }), 300)
  }

  const handleClickOutside = () => closeModal()

  useOutsideClick({ ref, handler: handleClickOutside })

  return (
    <>
      <div className='modal'>
        <div
          className={getClassName('modal-container')}
          ref={ref}
        >
          {props.children}
          <div className='close-button'>
            <DSIconButton
              source={props.iconSource || 'assets/images/close_icon.png'}
              alt='Botão de fechar'
              width={18}
              height={20}
              handleOnClick={({ event }) => closeModal(event)}
            ></DSIconButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default DSModal
