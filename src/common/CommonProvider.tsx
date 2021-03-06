import { useReducer } from 'react'
import CommonReducerContext from './CommonContext'
import commonReducer, { commonInitialState } from './CommonReducer'
import { useMediaQuery } from 'react-responsive'

type Props = {
}

const CommonProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch]: any = useReducer(commonReducer, commonInitialState)
  const isSmartPhone = useMediaQuery({ maxWidth: 539 })
  const isTablet = useMediaQuery({
    minWidth: 540,
    maxWidth: 1039
  })
  const isMobile = isSmartPhone || isTablet
  const isPc = !isMobile
  const value: any = { state, dispatch, isSmartPhone, isTablet, isPc }

  return (
    <CommonReducerContext.Provider value={value}>
      {children}
    </CommonReducerContext.Provider>
  )
}

export default CommonProvider
