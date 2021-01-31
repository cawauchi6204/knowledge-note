import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Quotes from '../components/Quotes'
import JointDevelopment from '../components/JointDevelopment'

type Props = {
  blogs: {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    body: string,
    tags: any[]
  }
}

type Tag = {
  id: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  revisedAt: string,
  name: string
}

const Home: React.FC<Props> = ({ blogs }: any) => {
  console.log('indexのblogsは' + JSON.stringify(blogs))
  return (
    <Layout>
      <Quotes />
      <h2>最新の記事</h2>
      <div>
        {blogs.map((blog: any) => (
          <React.Fragment key={blog.id}>
            <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
              <a>
                <h2>{blog.title}</h2>
              </a>
            </Link>
            {blog.tags.map((tag: Tag) => (
              <React.Fragment key={tag.id}>
                <span>{tag.name}</span>
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      <CardList />
      <JointDevelopment />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs`,
    key,
  );
  console.log(res)
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    }
  }
};

export default Home;
