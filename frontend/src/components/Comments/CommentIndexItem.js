import React from 'react'

const CommentIndexItem = ({comment}) => {

  if (!comment) return <></>;
  return (
    <div className="comment-index-item">
      {comment.body}
    </div>
  )
}

export default CommentIndexItem