import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { QUERY as CommentsQuery } from 'src/components/CommentsCell'

const DELETE = gql`
  mutation DeleteCommentMutation($id: Int!) {
    deleteComment(id: $id) {
      postId
    }
  }
`

const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  const { hasRole } = useAuth()
  const [deleteComment] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: CommentsQuery,
        variables: { postId: comment.postId },
      },
    ],
  })

  const moderate = () => {
    if (confirm('Are you sure?')) {
      deleteComment({
        variables: { id: comment.id },
      })
    }
  }

  return (
    <div>
      <h2>{comment.name}</h2>
      <time dateTime={comment.createdAt}>
        {formattedDate(comment.createdAt)}
      </time>
      <p>{comment.body}</p>
      {hasRole('moderator') && (
        <button type="button" onClick={moderate}>
          Delete
        </button>
      )}
    </div>
  )
}

export default Comment
