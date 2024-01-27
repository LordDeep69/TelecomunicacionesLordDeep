import { useState, useEffect } from 'react'
import { type Dimentions } from '../utilities'

const useScreenSize = (): Dimentions => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = (): void => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return { width, height }
}

export default useScreenSize
