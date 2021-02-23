import React from "react"
import styled from 'styled-components'

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

const Grid = styled.article`
margin: 30px 0 60px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-row-gap: 15px;
    grid-column-gap: 15px;
    -webkit-column-gap: 15px;
    column-gap: 15px;
`

const CardList: React.FC<Props> = ({ blogs }) => {
  console.log('CardListの22行目のblogsは' + JSON.stringify(blogs))
  console.log('CardListの38行目のblogs.eyecatchingは' + blogs[0].eyecatching)
  return (
    <Grid>
      {blogs.map((blog: any) => (
        <React.Fragment key={blog.id}>
          <Card description={blog} />
        </React.Fragment>
      ))}
    </Grid>
  )
}

export default CardList
