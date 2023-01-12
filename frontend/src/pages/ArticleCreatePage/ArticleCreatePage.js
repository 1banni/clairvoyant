import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createArticle } from '../../store/articles';
import { useInput, useSubmit } from '../../hooks';
import { Input } from '../../blocks/Form';
import Button from '../../blocks/Button';
import $ from 'jquery';

import './ArticleCreatePage.css'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const ArticleCreatePage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [title, titleChange] = useInput('');
  const [body, bodyChange] = useInput('');
  const [blurb, blurbChange] = useInput('');
  // TODO -> make the setter convert into array, and then render split with spaces
  // format each word to look like tag within input box
  const [topic, topicChange] = useInput('');

  // const [title, setTitle] = useState();

  // const handleChange = e => {}
  $('textarea').on('input', function() {
    $(this).outerHeight(40).outerHeight(this.scrollHeight);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!sessionUser) throw "you must be logged in to bookmark a post";
    let articleId = await dispatch(createArticle({title, topic, blurb, body}));
    if (articleId) history.push(`/articles/${articleId}`);
  }


  // const [errors, handleSubmit] = useSubmit({
  //   createAction: () => createArticle({title, body, blurb, topic}),
  //   onSuccess: () => history.push('/')
  // });

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className='article-create-page'>
      <form className="article-create-form" onSubmit={handleSubmit} >
      <div className="pair">
        <div className="article-create-page-title-label">Title</div>
        {/* <ReactQuill theme="bubble" value={title} placeholder='What will you name it?' onChange={titleChange} /> */}
        <Input label=""
            containername="article-create-form-ctnr-title"
            className="article-create-form-title"
            type="text"
            value={title}
            onChange={titleChange}
            placeholder="Title"
            // size="140"
            required
          />
      </div>
      <div className="pair">
        <div className="article-create-page-topic-label">Topic</div>
        <Input label=""
            containername="article-create-form-ctnr-topic"
            className="article-create-form-topic"
            type="text"
            value={topic}
            onChange={topicChange}
            placeholder="Up to 20 characters)"
            size="140"
            maxlength="20"
            required
          />
        {/* <ReactQuill theme="bubble" value={blurb} onChange={blurbChange} /> */}
      </div>
      <div className="pair">
        <div className="article-create-page-blurb-label">Blurb</div>
        {/* <ReactQuill theme="bubble" value={topic} onChange={topicChange} /> */}
        <Input label=""
            className="article-create-form-blurb"
            type="text"
            value={blurb}
            onChange={blurbChange}
            placeholder="Up to 120 characters (optional)"
            maxlength="120"
            // required
          />
      </div>
      <div className="pair">
        <div className="article-create-page-body-label">Body</div>
        <textarea label=""
          className="article-create-form-body textarea"
          type="textarea"
          value={body}
          onChange={bodyChange}
          placeholder="Body"
          required
        />
      </div>
        <Button type="submit" label="Submit Article"/>
      </form>
    </div>
  )
}

export default ArticleCreatePage;
