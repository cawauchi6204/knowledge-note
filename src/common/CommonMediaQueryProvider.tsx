import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const MediaQueryContext = React.createContext({
  isSmartPhone: false,
  isTablet: false,
  isMobile: false,
  isPc: false
})

export const CommonMediaQueryProvider: React.FC = ({ children }) => {
  const isSmartPhone = useMediaQuery({ maxWidth: 539 })
  const isTablet = useMediaQuery({
    minWidth: 540,
    maxWidth: 1039
  })
  const isMobile = isSmartPhone || isTablet
  const isPc = !isMobile

  return (
    <MediaQueryContext.Provider
      value={{ isSmartPhone, isTablet, isMobile, isPc }}
    >
      {children}
    </MediaQueryContext.Provider>
  )
}

export const useDeviceType = () => useContext(MediaQueryContext)
