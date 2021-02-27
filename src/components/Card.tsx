import React, { useContext } from "react"
import styled from 'styled-components'
import CommonReducerContext from '../common/CommonContext'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  description: {
    title: string
    tag: string[]
    updated: string
    id: string
    eyecatching: {
      url: string
    }
  },
}

const Article: any = styled.article.attrs((props: any) => ({
  width: props.states.isSmartPhone || props.states.isTablet ? 'auto' : '300px',
  height: props.states.isSmartPhone || props.states.isTablet ? 'auto' : 'auto',
}))`
  border-radius:10px;
  width:${props => props.width};
  height:${props => props.height};
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

const Card: React.FC<Props> = ({ description }) => {
  const states: any = useContext(CommonReducerContext)
  return (
    <Link href="/blogs/[id]" as={`blogs/${description.id}`}>
      <Article className="pointer" states={states}>
        {
          description.eyecatching ?
            <Image width="auto" height="200px" src={description.eyecatching.url} />
            :
            <Image width="auto" height="200px" src="https://placehold.jp/300x200.png" />
        }
        <Content>
          <CardTitle>{description.title}</CardTitle>
          <TagTitle>{description.tag}</TagTitle>
          <Updated>{description.updated}</Updated>
        </Content>
      </Article>
    </Link>
  )
}

export default Card
