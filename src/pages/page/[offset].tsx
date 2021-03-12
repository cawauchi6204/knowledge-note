import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { Pagination } from '@material-ui/lab'
import CommonProvider from '../../common/CommonProvider'

import Layout from '../../components/Layout'
import CardList from '../../components/CardList'

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
      },
    }
  ],
  totalCount: number,
  limit: number,
}

const DynamicPage: React.FC<Props> = ({ blogs, totalCount, limit }) => {
  const router = useRouter();
  const offset = router.query.offset
    ? Number.parseInt(String(router.query.offset), 10)
    : 1

  const handleChangePage = useCallback(
    (_: React.ChangeEvent<unknown>, page: number) => {
      void router.push(`/page/${page}`)
    },
    [router],
  )

  return (
    <CommonProvider>
      <Layout>
        <CardList blogs={blogs} />
        <Pagination
          count={Math.ceil(totalCount / limit)}
          variant="outlined"
          shape="rounded"
          color="secondary"
          page={offset}
          onChange={handleChangePage}
        />
      </Layout>
    </CommonProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY ?? '' },
  }
  const blogs = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs?offset=0&limit=3`,
    key,
  )
    .then((res) => res.json())
    .catch(() => null);

  const paths = [...Array(Math.ceil(blogs.totalCount / blogs.limit))]
    .map((_, i) => i + 1)
    .map((offset) => `/page/${offset}`)

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const offset = params?.offset ? String(params?.offset) : '0';

  const LIMIT = 6

  const query = {
    limit: LIMIT,
    offset: String(Math.ceil(Number.parseInt(offset, 10) - 1) * LIMIT),
  }

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY ?? '' },
  }
  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs?offset=${query.offset}&limit=${query.limit}`,
    key,
  )
  const data = await res.json()
  const totalCount: number = data.totalCount
  const limit: number = data.limit

  return {
    props: {
      blogs: data.contents,
      totalCount,
      limit
    },
  }
}

export default DynamicPage
