import React from 'react'
import Button from '../Button'

const CommentButton = ({toggleCommentDisplay}) => {
  return (
    <div className="comment">
      <Button className="icon-btn comment"
              containername="icon-ctnr comment"
              onClick={toggleCommentDisplay}>Comment
        {/* <img className="comment-img" src={CommentImg} size="100px" alt="comment-img"/> */}
      </Button>
      {/* <div className="comment-ct">{comments?.length}</div> */}
    </div>
  )
}

export default CommentButton;