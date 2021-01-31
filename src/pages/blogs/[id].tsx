import React from 'react';
import Layout from '../../components/Layout'

type Props = {
  blog: {
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

const BlogId: React.FC<Props> = ({ blog }) => {
  console.log('[id]のblogは' + JSON.stringify(blog))
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
      <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch('https://knowledge-note.microcms.io/api/v1/blogs', key);
  console.log(res)
  const repos = await res.json();

  const paths = repos.contents.map((repo: any) => `/blogs/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;

  const key: any = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch(
    `https://knowledge-note.microcms.io/api/v1/blogs/${id}`,
    key,
  )
  console.log(res)
  const blog = await res.json()

  return {
    props: {
      blog: blog,
    }
  }
}

export default BlogId
