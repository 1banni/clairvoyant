import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../blocks/Form';
// import { fetchComments } from '../../store/comments';
import CommentTile from './CommentTile';
import './CommentIndex.css';
import CommentForm from './CommentForm';

const CommentIndex = ({article}) => {
  const comments = useSelector(store => Object.values(store.comments));
  if (!comments || comments === [null]) return <></>;
  return (
    <>
      <CommentForm articleId={article?.id} formtype='create'/>
      <div className='comment-index'>
        {comments && comments.map(comment => {return (
          <CommentTile key={comment?.id} commentId={comment?.id}/>
        )})}
      </div>
    </>
  );
};

export default CommentIndex;