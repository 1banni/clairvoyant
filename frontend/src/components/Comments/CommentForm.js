import React, { useState } from 'react'
import { FaPassport } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import { useDispatch, useSelector } from 'react-redux';
import ArticleAuthor from '../../blocks/ArticleAuthor/ArticleAuthor';
import Button from '../../blocks/Button'
import useStateChange from '../../hooks/useStateChange';
import { createComment, updateComment } from '../../store/comments';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const CommentForm = ({articleId, formtype, comment, editToggle, setEditToggle}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [body, setBody, handleBody] = useStateChange(comment?.body);
  const [active, setActive] = useState(false);
  const create = formtype === "create";
  const activeTag = (active || editToggle) ? "active" : "";


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in handle submit");

    if (!sessionUser) throw new Error("you must be logged in to comment on an article");
    let commentData = {
      body,
      article_id: articleId,
    };
    if (sessionUser) commentData.author_id = sessionUser.id;
    if (comment) commentData.id = comment.id;

    console.log('formtype');
    console.log(formtype);
    if (formtype === "edit") {
      dispatch(updateComment(commentData));
      setBody("");
      setEditToggle(false);
    } else {
      dispatch(createComment(commentData));
      setBody("");
      setActive(false);
    }
  }

  const handleCancel = (e) => {
    e.preventDefault();
    setBody("");
    if (create) {
      setActive(false);
    } else {
      setEditToggle(false);
    }
    // console.log('handleCancel');
    // return "";
  }


  return (
    <>
      <div className={`outer-1 ${activeTag}`}>
      <div className={`comment-form-ctnr ${formtype} ${activeTag}`}>
      {create && !(body || active)
      ?
        <Button containername="activator-btn-ctnr"
                className="activator-btn"
                onClick={() => setActive(true)}
                label="What are your thoughts?"
        />
      :
      <div className={`create-form ${activeTag}`}>
        {create &&
        (<div className="user">
          <ArticleAuthor name={sessionUser?.name} />
        </div>)}
        {/* <form> */}
        <div className={"input-wrapper "+ formtype}>
          <ReactQuill theme="snow"
                      modules={{toolbar: false}}
                      formats={['bold', 'italic']}
                      value={body}
                      onChange={setBody}
                      id="reactquill"
                      toolbar={false}
          />
          {/* <div
            contentEditable="true"
            label=""
            containername={"input-ctnr " + formtype}
            className={"input " + formtype}
            type="textarea"
            value={body}
            onChange={handleBody}
            placeholder="What are your thoughts?"
            // size="140"
            required
          /> */}
        </div>
        {(active || editToggle) && (
        <div className="buttons">
          <Button
            containername="cancel-btn-ctnr"
            className="cancel-btn"
            label="Cancel"
            onClick={handleCancel}
          />
          <Button
            containername="respond-btn-ctnr"
            className="respond-btn"
            label="Respond"
            onClick={handleSubmit}
          />
        </div>
        )}
      {/*) } */}
        {/* </form> */}
        </div>
      }
      </div>
      </div>
    </>
  )
}

export default CommentForm