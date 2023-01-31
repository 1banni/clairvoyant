import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchComments } from '../../store/comments';
import CommentIndexItem from './CommentIndexItem';
import './Comments.css';

const CommentIndex = ({article}) => {
  // const dispatch = useDispatch();
  const comments = useSelector(store => Object.values(store.comments));

  // useEffect(() => {
  //   dispatch(fetchComments(article.id))
  // }, [dispatch, article])

  console.log('comments');
  console.log(comments);

  if (!comments || comments === [null]) return <></>;
  return (
    <div className="comment-index">
      {comments && comments.map(comment => {return (
        <CommentIndexItem key={comment?.id} comment={comment}/>
      )})},
    </div>
  );
};

export default CommentIndex;