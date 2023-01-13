import React from 'react';
import { useSelector } from 'react-redux';
import './Comments.css';

const Comments = ({article}) => {
  const comments = useSelector(store => store.comments);

  return (
    <div>
      {comments.map(comment => {return (
        <div key={comment.id} comment={comment}>
          {comment.body}
          {comment.author}
        </div>
      )})},
    </div>
  );
};

export default Comments;