import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../../store/comments';
import './Comments.css';

const Comments = ({article}) => {
  // const dispatch = useDispatch();
  const comments = useSelector(store => Object.values(store.comments));

  // useEffect(() => {
  //   dispatch(fetchComments(article.id))
  // }, [dispatch, article])

  console.log('comments');
  console.log(comments);
  return (
    <div>
      {/* {comments && comments.map(comment => {return (
        <div key={comment.id} comment={comment}>
          {comment.body}
          {comment.author}
        </div>
      )})}, */}
    </div>
  );
};

export default Comments;