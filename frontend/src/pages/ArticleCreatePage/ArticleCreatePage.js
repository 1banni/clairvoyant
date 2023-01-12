import { useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import { createArticle } from '../../store/articles';
import { useInput, useSubmit } from '../../hooks';
import { Input } from '../../blocks/Form';
import Button from '../../blocks/Button';

import './ArticleCreatePage.css'

import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const ArticleCreatePage = props => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const [title, titleChange] = useInput('');
  const [body, bodyChange] = useInput('');
  const [blurb, blurbChange] = useState('');
  // TODO -> make the setter convert into array, and then render split with spaces
  // format each word to look like tag within input box
  const [topic, topicChange] = useInput('');

  const [errors, handleSubmit] = useSubmit({
    createAction: () => createArticle({title, body, blurb, topic}),
    onSuccess: () => history.push('/')
  });

  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className='article-create-page'>
      <form onSubmit={handleSubmit} className="article-create-form">
      <div className="pair">
        <div className="article-create-page title-label">Title</div>
        <ReactQuill theme="bubble" value={title} placeholder='What will you name it?' onChange={titleChange} />
      </div>
      <div className="pair">
        <div className="article-create-page topic-label">Topic</div>
        <ReactQuill theme="bubble" value={topic} onChange={topicChange} />
      </div>
      <div className="pair">
        <div className="article-create-page blurb-label">Blurb</div>
        <ReactQuill theme="bubble" value={blurb} onChange={blurbChange} />
      </div>
      <div className="pair">
        <div className="article-create-page body-label">Body</div>
        <ReactQuill theme="snow" value={body} onChange={bodyChange} />
      </div>
        <Button type="submit" label="Submit Article"/>
      </form>
    </div>
  )
}

export default ArticleCreatePage;
