import React from "react"
import styled from 'styled-components'

import CommonToc from '../common/CommonToc'

type Props = {
  tocArray: [
    {
      name: string
      id: string
      text: string
    }
  ]
}

const TocContainer = styled.div`
  margin: 0 auto;
  border: solid 6px #008F8F;
  max-width: 450px;
  border-radius: 15px;
`

const TocTitle = styled.p`
  background-color: #008F8F;
  text-align: center;
  font-weight: bold;
  color: white;
  padding: 1em 0;
  font-size: 1.1em;
  margin: 0;
`

const Toc: React.FC<Props> = ({ tocArray }) => {
  return (
    <TocContainer>
      <TocTitle>目次</TocTitle>
      <CommonToc tocArray={tocArray} />
    </TocContainer>
  )
}

export default Toc
