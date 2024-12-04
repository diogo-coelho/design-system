import React, { useRef, useState } from 'react'
import { SelectProps } from '@/types/select'
import DSInput from '../DSInput/index'
import useOutsideClick from '@/directives/useOutsideClick'
import '@/assets/sass/app.scss'

const DSSelect = (props: SelectProps) => {
  const [active, setActive] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<string>('')
  const ref = useRef<HTMLDivElement>(null)

  const className = (mainClass: string): string => {
    return [mainClass, (props.inputSize || props['input-size']) ?? ``]
      .toString()
      .replaceAll(',', ' ')
      .trim()
  }

  const toggleActive = (active: boolean): void => setActive(active)
  const handleOnClick = (option: string, event: React.MouseEvent<HTMLLIElement>): void => {
    setCurrentValue(option)
    props.handleOnSelect?.({ args: option, event })
  }
  const handleClickOutside = () => setActive(false)

  useOutsideClick({ ref, handler: handleClickOutside })

  React.useEffect(() => {
    if (!props.selectedValue) return
    setCurrentValue(props.selectedValue)
  }, [props.selectedValue])

  return (
    <>
      <div
        className={className('select-container')}
        onClick={() => toggleActive(!active)}
        ref={ref}
      >
        <DSInput
          type='text'
          input-size={props.inputSize || props['input-size']}
          placeholder={props.placeholder}
          suffix={props.suffix || '/arrow_drop_down.png'}
          active={active.toString()}
          error={props.error}
          current-value={currentValue}
          handleOnClick={(event) => props.handleOnSelectClick?.({ event })}
          readOnly
        />
        <div
          className={className('select-dropdown')}
          data-active={active}
        >
          {props.options && (
            <ul>
              {props.options.map((option, index) => (
                <li
                  key={index}
                  onClick={(event) => handleOnClick(option, event)}
                  className={option === currentValue ? 'selected' : ''}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default DSSelect
