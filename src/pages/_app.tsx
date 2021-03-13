import "../../styles/styles.scss"
import { createContext, useReducer } from 'react'
import { AppProps } from 'next/app'
import CommonProvider from '../common/CommonProvider'
import commonReducer, { commonInitialState } from '../common/CommonReducer'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../styles/theme'
import Head from 'next/head'

export type State = {
  number: number
}

export type Action = {
  type: string
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(commonReducer, commonInitialState)
  const value = { state, dispatch }
  return (
    <CommonProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CommonProvider>
  )
}
