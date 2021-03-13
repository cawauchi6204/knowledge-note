import React, { useContext } from 'react'
import CommonReducerContext from '../common/CommonContext'
import styled from 'styled-components'
import cheerio from 'cheerio'
import 'highlight.js/styles/night-owl.css'

import Toc from '../components/Toc'
import Sidebar from '../components/Sidebar'
import { CommonFlexRow } from '../common/CommonHtmlStyledTag'

type Props = {
  blog: {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    tags: any[],
    body: any
  },
  highlightedBody: string
}

type Tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

const LeftColumn: any = styled.section.attrs((props: any) => ({
  width: props.states.isSmartPhone || props.states.isTablet ? '100%' : '70%',
}))`
  width:${props => props.width};
  height:100%;
`

const RightColumn = styled.section`
  width:30%;
  height:100%;
`

const Article: React.FC<Props> = ({ blog, highlightedBody }) => {
  const states: any = useContext(CommonReducerContext)
  console.log('test')

  const {
    isSmartPhone,
    isTablet,
    isPc
  } = states
  const $ = cheerio.load(highlightedBody)
  const headings = $('h1, h2, h3').toArray()
  const tocArray: any = headings.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name
  }))

  return (
    <CommonFlexRow>
      <LeftColumn states={states}>
        <h1>{blog.title}</h1>
        <div>
          {blog.tags.map((tag: Tag) => (
            <React.Fragment key={tag.id}>
              <span>{tag.name}</span>
            </React.Fragment>
          ))}
        </div>
        {
          !isPc && tocArray.length > 0 && <Toc tocArray={tocArray} />
        }
        <div dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
      </LeftColumn>
      {
        isPc && (
          <RightColumn>
            <Sidebar>
              {
                tocArray.length > 0 && <Toc tocArray={tocArray} />
              }
            </Sidebar>
          </RightColumn>
        )
      }
    </CommonFlexRow>
  )
}

export default Article
