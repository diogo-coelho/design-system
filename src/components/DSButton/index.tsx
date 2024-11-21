import React from 'react'
import { ButtonProps } from '../../types/button'
import './DSButton.scss'

const DSButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const className = (): string => {
    return [
      `button`,
      props.variant ?? `primary`,
      props.size ?? ``,
      props.outline === 'on' ? `outline` : ``,
    ]
      .toString()
      .replaceAll(',', ' ')
      .trim()
  }

  return (
    <button
      className={className()}
      type={props.type || 'button'}
      disabled={props.disabled || false}
      onClick={(event) => props.handleOnClick?.({ event })}
    >
      {props.children}
    </button>
  )
}

export default DSButton
