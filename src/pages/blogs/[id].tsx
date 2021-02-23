import React from 'react';
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

import Layout from '../../components/Layout'

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
  body: any
}

type Tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

const BlogId: React.FC<Props> = ({ blog,body }) => {
  return (
    <Layout>
      <h1>{blog.title}</h1>
      <div>
        {blog.tags.map((tag: Tag) => (
          <React.Fragment key={tag.id}>
            <span>{tag.name}</span>
          </React.Fragment>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }}></div>
    </Layout>
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
      body:$.html()
    },
  }
}

export default BlogId
