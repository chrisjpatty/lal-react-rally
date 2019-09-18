import useScrollTop from './useScrollTop'

const usePageProgress =  () => {
  const scrollTop = useScrollTop()
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  return (scrollTop / (pageHeight - windowHeight) || 0)
}

export default usePageProgress
