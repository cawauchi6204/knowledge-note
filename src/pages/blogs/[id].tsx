import React, { useContext } from 'react';
import CommonReducerContext from '../../common/CommonContext'
import styled from 'styled-components'
import cheerio from 'cheerio';
import hljs from 'highlight.js'
import 'highlight.js/styles/night-owl.css';

import CommonProvider from '../../common/CommonProvider'
import Layout from '../../components/Layout'
import Toc from '../../components/Toc'
import Sidebar from '../../components/Sidebar'
import { CommonFlexRow } from '../../common/CommonHtmlStyledTag'

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

const LeftColumn = styled.section`
  width:70%;
  height:100%;
`

const RightColumn = styled.section`
  width:30%;
  height:100%;
`

const BlogId: React.FC<Props> = ({ blog, highlightedBody }) => {
  const { state, dispatch }: any = useContext(CommonReducerContext)
  const $ = cheerio.load(highlightedBody)
  const headings = $('h1, h2, h3').toArray()
  const tocArray: any = headings.map((data: any) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name
  }))
  return (
    <CommonProvider>
      <Layout>
        <CommonFlexRow>
          <LeftColumn>
            <h1>{blog.title}</h1>
            <div>
              {blog.tags.map((tag: Tag) => (
                <React.Fragment key={tag.id}>
                  <span>{tag.name}</span>
                </React.Fragment>
              ))}
            </div>
            {
              tocArray.length > 0 && <Toc tocArray={tocArray} />
            }
            <div dangerouslySetInnerHTML={{ __html: highlightedBody }}></div>
          </LeftColumn>
          <RightColumn>
            <Sidebar>
              {
                tocArray.length > 0 && <Toc tocArray={tocArray} />
              }
            </Sidebar>
          </RightColumn>
        </CommonFlexRow>
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
