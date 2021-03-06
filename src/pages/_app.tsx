import "../../styles/styles.scss"
import { createContext, useReducer } from 'react'
import { AppProps } from 'next/app'
import CommonProvider from '../common/CommonProvider'
import commonReducer, { commonInitialState } from '../common/CommonReducer'

export type State = {
  number: number
}
export type Action = {
  type: string
}

export const CounterContext = createContext(
  {} as { state: State; dispatch: React.Dispatch<Action> }
)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(commonReducer, commonInitialState)
  const value = { state, dispatch }
  return (
    <CommonProvider>
      <CounterContext.Provider value={value}>
        <Component {...pageProps} />
      </CounterContext.Provider>
    </CommonProvider>
  )
}
