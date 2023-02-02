import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input } from '../../blocks/Form';
// import { fetchComments } from '../../store/comments';
import CommentTile from './CommentTile';
import './CommentIndex.css';
import { useInput } from '../../hooks';
import { createComment } from '../../store/comments';
import Button from '../../blocks/Button';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm';

const CommentIndex = ({article}) => {
  const comments = useSelector(store => Object.values(store.comments));
  if (!comments || comments === [null]) return <></>;
  return (
    <>
      <CommentForm articleId={article?.id} formtype="create"/>
      <div className='comment-index'>
        {comments && comments.map(comment => {return (
          <CommentTile key={comment?.id} commentId={comment?.id}/>
        )})}
      </div>
    </>
  );
};

export default CommentIndex;