import React from "react"
import styled from 'styled-components'

import Header from "./Header"
import Footer from "./Footer"

type Props = {}

const Section = styled.section`
  margin:0 5rem;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Section>
        {children}
      </Section>
      <Footer />
    </>
  )
}

export default Layout
