import React from "react"
import styled from 'styled-components'

type Props = {}

const Span = styled.span`
font-weight:bold;
display: inline-block;
`

const Section = styled.section`
text-align:center;
`

const Quotes: React.FC<Props> = ({ }) => {
  return (
    <Section>
      <span>おさないさんの格言</span>
      <Span>
      編集今日終わらせようと思ったけど無理無理の無理だわ
      1時間56分の映像とか劇場版かよ
      正気の沙汰じゃねえわ
      </Span>
    </Section>
  )
}

export default Quotes
