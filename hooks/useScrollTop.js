import React from 'react'

const useScrollTop = () => {
  const [scrollTop, setScrollTop] = React.useState(window.scrollY);

  const handleScroll = e => {
    setScrollTop(window.scrollY)
  }

  React.useEffect(() => {
    setScrollTop(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollTop;
}

export default useScrollTop
