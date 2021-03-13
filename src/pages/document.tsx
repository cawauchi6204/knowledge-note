import { Head, Html, Main, NextScript } from 'next/document'

interface Props { }
const Document: React.FC<Props> = () => {
  return (
    <Html lang="ja">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Stick&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DotGothic16&display=swap" rel="stylesheet" />
      </Head>
    </Html>
  )
}

export default Document
