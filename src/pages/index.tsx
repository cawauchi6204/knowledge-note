import React from 'react'
import Link from 'next/link'

import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Quotes from '../components/Quotes'
import JointDevelopment from '../components/JointDevelopment'

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

type Tag = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}

const Home: React.FC<Props> = ({ blogs }) => {
  return (
    <Layout>
      <Quotes />
      <h2>最新の記事</h2>
      <CardList blogs={blogs} />
      <JointDevelopment />
    </Layout>
  );
};

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
};

export default Home;
