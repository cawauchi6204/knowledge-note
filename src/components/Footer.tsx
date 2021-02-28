import React from "react"
import styled from 'styled-components'

type Props = {}

const LayoutFooter = styled.footer`
background-color:black;
text-align:center;
`

const Cp = styled.span`
color:white;
`

const Footer: React.FC<Props> = ({ }) => {
  return (
    <LayoutFooter>
      <Cp>©︎プログラミングアカデミー</Cp>
    </LayoutFooter>
  )
}

export default Footer
