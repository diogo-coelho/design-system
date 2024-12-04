import React, { RefObject } from 'react'

export interface OutsideClickProps {
  ref: RefObject<HTMLElement | null>
  handler: (event?: Event) => void
}

const useOutsideClick = (props: OutsideClickProps) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (props.ref.current && props.ref.current!.contains(event.target as Node)) {
        return
      }
      props.handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [props])
}

export default useOutsideClick
