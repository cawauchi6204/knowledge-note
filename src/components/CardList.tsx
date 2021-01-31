import React from "react"
import styled from 'styled-components'

import Card from './Card'

type Props = {}

const Grid = styled.article`
margin: 30px 0 60px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;
    -webkit-column-gap: 15px;
    column-gap: 15px;
`

const CardList: React.FC<Props> = ({ }) => {
  return (
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  )
}

export default CardList
