import React, { useContext } from "react"
import styled from 'styled-components'
import CommonReducerContext from '../common/CommonContext'

import Card from './Card'

type Props = {
  blogs: [
    {
      id: string
      createdAt: string
      updatedAt: string
      publishedAt: string
      revisedAt: string
      title: string
      body: string
      tags: string[]
      eyecatching: {
        url: string
        height: number
        width: number
      }
    }
  ],
}

const CardListSection: any = styled.section.attrs((props: any) => ({
  margin: props.states.isSmartPhone || props.states.isTablet ? '7% 0 60px;' : '0 auto',
}))`
  margin:${props => props.margin};
`

const PCGrid = styled.article`
  margin: 7% auto;
  max-width:1032px;
  display: grid;
  place-items:center;
  grid-template-columns: repeat(3,1fr);
  justify-content:center;
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
  row-gap:15px;
`

const TBGrid = styled.article`
  margin-top:7%;
  margin: 30px 0 60px;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
`

const SPGrid = styled.article`
  margin-top:7%;
  margin: 30px 0 60px;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-row-gap: 15px;
  grid-column-gap: 15px;
  -webkit-column-gap: 15px;
  column-gap: 15px;
`

const CardList: React.FC<Props> = ({ blogs }) => {
  const states: any = useContext(CommonReducerContext)

  const {
    isSmartPhone,
    isTablet,
    isPc
  } = states
  // const {state, dispatch, isSmartPhone, isTablet, isPc} = states
  return (
    <CardListSection states={states}>
      {isSmartPhone && (
        <SPGrid>
          {blogs.map((blog: any) => (
            <React.Fragment key={blog.id}>
              <Card description={blog} />
            </React.Fragment>
          ))}
        </SPGrid>
      )}
      {isTablet && (
        <TBGrid>
          {blogs.map((blog: any) => (
            <React.Fragment key={blog.id}>
              <Card description={blog} />
            </React.Fragment>
          ))}
        </TBGrid>
      )}
      {isPc && (
        <PCGrid>
          {blogs.map((blog: any) => (
            <React.Fragment key={blog.id}>
              <Card description={blog} />
            </React.Fragment>
          ))}
        </PCGrid>
      )}
    </CardListSection>
  )
}

export default CardList
