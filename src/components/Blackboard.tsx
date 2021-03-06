import React from "react"
import styled from 'styled-components'

type Props = {}

const Kokuban = styled.section`
  color: #fff;
  background-color: #114400;
  margin: 0 auto;
  padding: 15px;
  border: 9px solid #a60;
  border-radius: 3px;
  box-shadow: 2px 2px 4px #666, 2px 2px 2px #111 inset;
  line-height: 1.9;
  max-width:450px;
`


const Blackboard: React.FC<Props> = ({ children }) => {
  return (
    <Kokuban>
      {children}
    </Kokuban>
  )
}

export default Blackboard
