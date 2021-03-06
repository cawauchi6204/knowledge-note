import React from 'react'

import CommonProvider from '../common/CommonProvider'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import CoDevelopment from '../components/CoDevelopment'

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
  ]
}

const Home: React.FC<Props> = ({ blogs }) => {
  return (
    <CommonProvider>
      <Layout>
        <CardList blogs={blogs} />
        <CoDevelopment />
      </Layout>
    </CommonProvider>
  )
}

export const getStaticProps = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs`,
    key,
  )
  const data = await res.json()

  return {
    props: {
      blogs: data.contents,
    }
  }
}

export default Home;
