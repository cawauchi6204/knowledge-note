import styled from 'styled-components'
import { CommonFlexRow } from '../common/CommonHtmlStyledTag'
import { AiFillTag } from 'react-icons/ai'

const Border = styled.div`
border:1px solid black;
border-radius:10px;
width:100px;
height:auto;
display:inline-block;
padding:10px;
`

const Tag = ({ children,className }: any) => {
  return (
    <>
      <Border className={className}><CommonFlexRow className="align-center"><AiFillTag style={{ marginRight: '5px'}} />{children}</CommonFlexRow></Border>
    </>
  )
}

export default Tag
