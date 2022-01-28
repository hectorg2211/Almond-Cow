import { useEffect, useState } from 'react'

const getWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 0)

const getSizeType = (newWidth: number) => {
  if (newWidth < 576) {
    return 'xs'
  } else if (newWidth < 768) {
    return 'sm'
  } else if (newWidth < 992) {
    return 'md'
  } else if (newWidth < 1200) {
    return 'lg'
  } else {
    return 'xl'
  }
}

const useResizeWidth = () => {
  const [width, setWidth] = useState(getWidth())
  const [screenType, setScreenType] = useState(getSizeType(width))

  const handleSetWidth = () => {
    const newWidth = getWidth()
    setWidth(newWidth)
    setScreenType(getSizeType(newWidth))
  }
  useEffect(() => {
    handleSetWidth()

    window.addEventListener('resize', handleSetWidth)
    return () => window.removeEventListener('resize', handleSetWidth)
  }, [])
  return { width, screenType }
}

export default useResizeWidth
