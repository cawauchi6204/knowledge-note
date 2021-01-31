import React from "react"
import styled from 'styled-components'
import Image from 'next/Image'

type Props = {}

const Article = styled.article`
  border-radius:10px;
  width:300px;
  height:300px;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.15);
  `

const Content = styled.div`
  padding:4px;
`

const CardTitle = styled.span`
display:block;
font-weight:bold;
`
const TagTitle = styled.span`
display:inline-block;
border:1px solid #0070f3;
border-radius:4px;
padding:2px;
`

const Updated = styled.span`
display:inline-block;
`

const Card: React.FC<Props> = ({ }) => {
  return (
    <Article>
      <Image width="auto" height="200px" src="https://placehold.jp/300x200.png" />
      <Content>
        <CardTitle>3時間でわかる</CardTitle>
        <TagTitle>JavaScript</TagTitle>
        <Updated>2017</Updated>
      </Content>
    </Article>
  )
}

export default Card
