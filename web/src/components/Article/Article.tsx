import { Link, routes } from '@redwoodjs/router'
import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  const isShowComments = !summary
  return (
    <article key={article.id}>
      <header>
        <h2>
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 text-gray-900 font-light">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <div>Posted at: {article.createdAt}</div>
      {isShowComments && (
        <div style={{ marginTop: '10px' }}>
          <CommentsCell />
        </div>
      )}
    </article>
  )
}

export default Article
