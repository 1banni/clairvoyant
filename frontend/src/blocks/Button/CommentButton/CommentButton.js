import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommentsByArticleId } from '../../../store/comments';
import Button from '../Button';
import './CommentButton.css';
import { PNG } from '../../../assets';


const CommentButton = ({article, toggleCommentDisplay}) => {
  const CommentImg = PNG.COMMENT_BUTTON;
  const comments = useSelector(selectCommentsByArticleId(article?.id));

  // console.log('comments');
  // console.log(comments);


  return (
    <div className="comment">
      <Button className="icon-btn comment"
              containername="icon-ctnr comment"
              onClick={toggleCommentDisplay}>
        <img className="comment-img" src={CommentImg} size="100px" alt="comment-img"/>
      </Button>
      <div className="comment-ct">{comments?.length}</div>
    </div>
  )
}

export default CommentButton;