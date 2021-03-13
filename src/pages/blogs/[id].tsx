import React from 'react';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

import CommonProvider from '../../common/CommonProvider'
import Layout from '../../components/Layout'
import Article from '../../components/Article'

type Props = {
  blog: {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    tags: any[],
    body: any
  },
  highlightedBody: string
}

type Tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

const BlogId: React.FC<Props> = ({ blog, highlightedBody }) => {
  const $ = cheerio.load(highlightedBody)

  return (
    <CommonProvider>
      <Layout>
        <Article blog={blog} highlightedBody={highlightedBody}/>
      </Layout>
    </CommonProvider>
  )
}

export const getStaticPaths = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch('https://knowledge-note.microcms.io/api/v1/blogs', key)
  const repos = await res.json()

  const paths = repos.contents.map((repo: any) => `/blogs/${repo.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id

  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  }

  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs/${id}`,
    key,
  )
  const blog = await res.json()
  const $ = cheerio.load(blog.body)

  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })
  return {
    props: {
      blog,
      highlightedBody: $.html()
    },
  }
}

export default BlogId
