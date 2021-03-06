import React, { useContext } from 'react'
import CommonPagination from '../../../common/CommonPagination'
import CommonReducerContext from '../../../common/CommonContext'
import CardList from '../../../components/CardList'

const PER_PAGE = 5

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
  totalCount: any
}

// pages/blog/[id].js
const BlogPage: React.FC<Props> = ({ blogs, totalCount }) => {
  const { state, dispatch }: any = useContext(CommonReducerContext)
  return (
    <>
      <CardList blogs={blogs} />
      <CommonPagination totalCount={totalCount} />
    </>
  )
}

// 動的なページを作成
export const getStaticPaths = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  }

  const res = await fetch(`https://knowledge-note.microcms.io/api/v1/blogs`, key)

  const repos = await res.json()

  const pageNumbers = []

  const range = (start: any, end: any) => [...Array(end - start + 1)].map((_, i) => start + i)

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blogs/page/${repo}`)
  console.log('[id]の55行目のpathsは' + paths)

  return { paths, fallback: false }
}

// データを取得
export const getStaticProps = async (context: any) => {
  const id:number = context.params.id
  console.log('[id]の62行目のidは' + id)

  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY }
  }

  const data = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs?offset=${(id - 1) * 5}&limit=5`,
    key
  ).then(res => res.json()).catch(() => null)
  console.log('[id]の73行目のdataは' + JSON.stringify(data))

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount
    }
  }
}

export default BlogPage
