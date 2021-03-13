import React from "react"
import styled from 'styled-components'
import Link from 'next/link'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from '../../styles/theme'

type Props = {}

const LayoutHeader = styled.header`
background-image: url('https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
width:100%;
height:20vh;
display:block;
text-align:center;
display:block;
align-items:middle;
position:relative;
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
position: absolute;
top: 50%;
left: 50%;
-webkit-transform : translate(-50%,-50%);
transform : translate(-50%,-50%);
text-align: center;/*一応BOX内の文字も中央寄せ*/
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
      <Link href="/">
        <WhiteLink><H1>プログラミングアカデミー</H1><br /><H2>学習帳</H2></WhiteLink>
      </Link>
    </LayoutHeader>
  )
}

export default Header
