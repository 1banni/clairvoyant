import './CommentIndex.css';
import React from 'react';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentTile from './CommentTile';

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