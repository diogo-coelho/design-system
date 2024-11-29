import { CSSProperties } from 'react'
import { IconButtonProps } from '../../types/icon_button'
import '../../assets/sass/app.scss'

const DSIconButton = (props: IconButtonProps) => {
  const getClassName = (): string => {
    return [`icon-button-container`, props.handleOnClick ? `pointer` : '']
      .toString()
      .replaceAll(',', ' ')
      .trim()
  }

  const getStyle = (): CSSProperties | undefined => {
    if (!props.backgroundColor) return undefined
    return {
      backgroundColor: convertBackgroundColors(props.backgroundColor),
    }
  }

  const convertBackgroundColors = (color: string): string => {
    switch (color) {
      case 'green':
        return 'var(--bb-color-green)'
      case 'light-green':
        return 'var(--bb-color-light-green)'
      case 'light-green-alpha':
        return 'var(--bb-color-light-green-alpha)'
      case 'red':
        return 'var(--bb-color-red)'
      case 'dark-grey':
        return 'var(--bb-color-dark-grey)'
      case 'light-grey':
        return 'var(--bb-color-light-grey)'
      case 'grey':
        return 'var(--bb-color-grey)'
      default:
        return color
    }
  }

  return (
    <>
      <button
        className={getClassName()}
        style={getStyle()}
      >
        <figure
          style={{
            width: props.width ? `${props.width}px` : 0,
            height: props.width ? `${props.width}px` : 0,
          }}
          onClick={(event) => props.handleOnClick?.({ event })}
        >
          <img
            src={props.source}
            alt={props.alt || ''}
          />
        </figure>
      </button>
    </>
  )
}

export default DSIconButton
