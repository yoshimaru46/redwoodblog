const formattedDate = (datetime) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

const Comment = ({ comment }) => {
  return (
    <div>
      <h2>{comment.name}</h2>
      <time dateTime={comment.createdAt}>
        {formattedDate(comment.createdAt)}
      </time>
      <p>{comment.body}</p>
    </div>
  )
}

export default Comment
