import React from "react"
import styled from 'styled-components'

import Head from './Head'
import Header from "./Header"
import Footer from "./Footer"

type Props = {}

const Section = styled.section`
  margin:0 5rem;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head
        title={'タイトルです'}
        description={'ディスクリプションです'}
        keyword={'キーワードです！'}
        image={
          'https://qiita-user-profile-images.imgix.net/https%3A%2F%2Flh3.googleusercontent.com%2F-BUmWankl_aQ%2FAAAAAAAAAAI%2FAAAAAAAADys%2F8oi87glPMLA%2Fphoto.jpg%3Fsz%3D50?ixlib=rb-1.2.2&auto=compress%2Cformat&lossless=0&w=300&s=649d309c71e365e6fc6d6b6d205c3710'
        }
        url={'https://qiita.com/shinshin86'}
      />
      <body>
        <Header />
        <Section>
          {children}
        </Section>
        <Footer />
      </body>
    </>
  )
}

export default Layout
