import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../blocks/Button'
import { Input } from '../../blocks/Form'
import { useInput } from '../../hooks';
import { createComment } from '../../store/comments';

const CommentForm = ({articleId}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [body, bodyChange] = useInput("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionUser) throw new Error("you must be logged in to comment on an article");
    const comment = {
      body,
      article_id: articleId
    }
    dispatch(createComment(comment));
  }

  return (
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
  )
}

export default CommentForm