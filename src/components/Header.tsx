import React from "react"
import styled from 'styled-components'
import Link from 'next/link'

type Props = {}

const LayoutHeader = styled.header`
background-image: url('https://images.unsplash.com/photo-1559260951-84ccf347341e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80');
width:100%;
height:20vh;
display:block;
text-align:center;
display:block;
`

const Circle = styled.div`
background-color:black;
background: rgba(0,0,0,0.8);
width:70%;
height:100%;
border-radius:50%;
margin:0 auto;
`

const WhiteLink = styled.a`
  color: white;
`

const H1 = styled.h1`
margin-top:0;
margin-bottom:0;
color:rgba(255,255,255,1);
`
const H2 = styled.h2`
margin-top:0;
margin-bottom:0;
color:rgba(255,255,255,1);
`

const Header: React.FC<Props> = ({ }) => {
  return (
    <LayoutHeader>
      <Circle>
        <Link href="/">
          <WhiteLink><H1>プログラミングアカデミー</H1><br/><H2>学習帳</H2></WhiteLink>
        </Link>
      </Circle>
    </LayoutHeader>
  )
}

export default Header
