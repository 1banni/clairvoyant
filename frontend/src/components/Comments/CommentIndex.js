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

const CommentIndex = ({article}) => {
  const dispatch = useDispatch();
  // let { articleId } = useParams();
  const comments = useSelector(store => Object.values(store.comments));
  const sessionUser = useSelector(state => state.session.user);
  // const formType =

  const [body, bodyChange] = useInput("");

  // useEffect(() => {
  //   dispatch(fetchComments(article.id))
  // }, [dispatch, article])

  // console.log('comments');
  // console.log(comments);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionUser) throw new Error("you must be logged in to comment on an article");
    console.log('article');
    console.log(article);
    console.log('article.id');
    console.log(article.id);
    const comment = {
      body,
      article_id: article.id
    }
    dispatch(createComment(comment));
  }

  if (!comments || comments === [null]) return <></>;
  return (
    <>
      <div className='comment-index'>
        {comments && comments.map(comment => {return (
          <CommentTile key={comment?.id} comment={comment}/>
        )})}
      </div>
      <div className='create-comment-ctnr'>
        <div className='create-comment'>
          <Input label=""
            containername="comment-create-form-ctnr-body"
            className="comment-create-form-body"
            type="text"
            value={body}
            onChange={bodyChange}
            placeholder="What are your thoughts?"
            // size="140"
            required
          />
          <Button
            containername="comment-create-btn-ctnr"
            className="comment-create-btn"
            label="respond"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CommentIndex;