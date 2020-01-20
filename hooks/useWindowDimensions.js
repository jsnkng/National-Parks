import { useState, useEffect } from 'react'

function useWindowDimensions() {
  const isClient = typeof window === 'object'
  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
      scrollX: isClient ? window.scrollX : undefined,
      scrollY: isClient ? window.scrollY : undefined,
    }
  }
  const [windowSize, setWindowSize] = useState(getSize)
  useEffect(() => {
    if (!isClient) {
      return false
    }
    function handleResize() {
      setWindowSize(getSize())
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)
    return () => {  window.removeEventListener('resize', handleResize) 
                    window.removeEventListener('scroll', handleResize) }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return windowSize
}

export default useWindowDimensions
