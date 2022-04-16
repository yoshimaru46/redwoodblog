import { MetaTags } from '@redwoodjs/web'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>
        Find me in <code>./web/src/pages/ArticlePage/ArticlePage.tsx</code>
      </p>
      <p>My id is {id}</p>
    </>
  )
}

export default ArticlePage
