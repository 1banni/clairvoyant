import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../blocks/Button'
import { Input } from '../../blocks/Form'
import { useInput } from '../../hooks';
import { createComment, updateComment } from '../../store/comments';

const CommentForm = ({articleId, formtype, comment, setEditToggle}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [body, bodyChange] = useInput("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionUser) throw new Error("you must be logged in to comment on an article");
    let commentData = {
      body,
      article_id: articleId,
    };
    if (sessionUser) commentData.author_id = sessionUser.id;
    if (comment) commentData.id = comment.id;

    if (formtype === "edit") {
      dispatch(updateComment(commentData));
      setEditToggle(false);
    } else {
      dispatch(createComment(commentData));
    }
  }

  return (
      <div className={formtype + "-comment-ctnr"}>
        <div className={formtype + "-comment"}>
          <Input label=""
            containername={"comment-" + formtype + "-form-ctnr-body"}
            className={"comment-" + formtype + "-form-body"}
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