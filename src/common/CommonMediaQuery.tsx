import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

const MediaQueryContext = React.createContext({
  isSmartPhone: false,
  isTablet: false,
  isMobile: false,
  isPc: false
})

export const CommonMediaQueryProvider: React.FC = ({ children }) => {
  const isSmartPhone = useMediaQuery({ maxWidth: 559 })
  const isTablet = useMediaQuery({
    minWidth: 560,
    maxWidth: 959
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
