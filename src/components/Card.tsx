import React, { useContext } from "react"
import styled from 'styled-components'
import CommonReducerContext from '../common/CommonContext'
import Image from 'next/image'
import Link from 'next/link'

import {
  CommonFlexRow,
  CommonFlexColumn,
} from '../common/CommonHtmlStyledTag'

import {
  commonSliceFirst10Date
} from '../common/CommonFunction'

type Props = {
  description: {
    title: string
    tags: any[]
    updatedAt: string
    id: string
    eyecatching: {
      url: string
    }
  },
}

type Tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

const cardImageBorderRadius = '10px'

const CardWrapper: any = styled.article.attrs((props: any) => ({
  width: props.states.isSmartPhone || props.states.isTablet ? 'auto' : '300px',
  height: props.states.isSmartPhone || props.states.isTablet ? 'auto' : 'auto',
  padding: props.states.isSmartPhone || props.states.isTablet ? '40px' : '20px'
}))`
  width:${props => props.width};
  height:${props => props.height};
  background-color: #008F8F;
  border-radius:3px;
  padding:${props => props.padding};
  box-shadow: 0 1px 8px 0 rgba(0,0,0,.15);
  position:relative;
  &::after {
    content:'';
    position: absolute;
    background-color:#005B41;
    top: 0;
    left: 0;
    width: 5%;
    height: 100%;
    border-radius:6px 0 0 6px;
  }
`

const CardTitleArea = styled.section`
  background-color:white;
  padding:4px;
`

const CardTitle = styled.span`
  display:block;
  font-weight:bold;
  color:#2B2970;
  margin:0 auto;
  font-size:0.8em;
`

const CardTagTitle = styled.span`
  display:inline-block;
  border:1px solid black;
  padding:2px;
  color:black;
  background-color:white;
`

const CardImageFrame = styled.div`
  margin:0;
`

const UpdatedSection = styled.section`
  background-color:white;
  width:100%;
  height:auto;
  text-align:right;
  line-height:1em;
`

const UpperCardSection = styled.section`
  width:100%;
  height:auto;
  font-size:24px;
  line-height:2em;
`

const ImageAndTitleSection = styled.section`
  display:inline-block;
  padding:10px;
  border:4px solid white;
  border-radius:${cardImageBorderRadius};
  position:relative;
  &::after {
    content:'';
    position: absolute;
    border-radius:${cardImageBorderRadius};
    border: solid 3px white;
    top: 3px;
    left: 3px;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
  }
`

const GradeSection = styled.section`
  background-color:white;
  margin-top:1%;
  font-size:1em;
  text-align:right;
`

const CopyrightSection = styled.section`
  background-color:white;
  margin-top:1%;
  font-size:0.6em;
  text-align:center;
`

const Card: React.FC<Props> = ({ description }) => {
  const states: any = useContext(CommonReducerContext)
  return (
    <Link href="/blogs/[id]" as={`blogs/${description.id}`}>
      <CardWrapper className="pointer" states={states}>
        <CommonFlexColumn>
          <UpdatedSection>
            <span className="tc-violet bold">
              投稿日:{commonSliceFirst10Date(description.updatedAt)}</span>
          </UpdatedSection>
          <CommonFlexRow>
            <UpperCardSection>
              <span className="tc-white bold">プロアカ学習帳</span>
            </UpperCardSection>
          </CommonFlexRow>
        </CommonFlexColumn>
        <ImageAndTitleSection>
          <CardImageFrame>
            {
              description.eyecatching ?
                <Image width="auto" height="200px" src={description.eyecatching.url} />
                :
                <Image width="auto" height="200px" src="https://placehold.jp/300x200.png" />
            }
          </CardImageFrame>
          <CardTitleArea>
            <CommonFlexRow className="justify-between">
              <CommonFlexRow>
                {
                  description.tags.map((tag: Tag) => (
                    <React.Fragment key={tag.id}>
                      <CardTagTitle>{tag.name}</CardTagTitle>
                    </React.Fragment>
                  ))
                }
              </CommonFlexRow>
              <CardTitle>{description.title}</CardTitle>
            </CommonFlexRow>
          </CardTitleArea>
          <GradeSection>
            <span className="lh-16">投稿者:hogeehoge</span>
          </GradeSection>
          <CopyrightSection>
            <span>©︎プログラミングアカデミー</span>
          </CopyrightSection>
        </ImageAndTitleSection>
      </CardWrapper>
    </Link>
  )
}

export default Card
