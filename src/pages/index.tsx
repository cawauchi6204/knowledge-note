import React, { useContext, useCallback } from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Pagination } from '@material-ui/lab'
import { Grid } from '@material-ui/core'

import CommonProvider from '../common/CommonProvider'
import CommonReducerContext from '../common/CommonContext'
import Layout from '../components/Layout'
import CardList from '../components/CardList'

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



const Home: React.FC<Props> = ({ blogs, totalCount, limit }) => {
  const { state, dispatch }: any = useContext(CommonReducerContext)
  const router = useRouter()

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
        <Grid container justify="center">
          <Pagination
            count={Math.ceil(totalCount / limit)}
            variant="outlined"
            shape="rounded"
            color="secondary"
            page={0}
            onChange={handleChangePage}
            className="center"
          />
        </Grid>
      </Layout>
    </CommonProvider>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }
  const LIMIT = 6
  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs?offset=0&limit=${LIMIT}`,
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
    }
  }
}

export default Home;
