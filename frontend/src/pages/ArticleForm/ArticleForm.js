import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';
import { createArticle, selectArticle, updateArticle } from '../../store/articles';
import { useInput } from '../../hooks';
import { Input } from '../../blocks/Form';
import Button from '../../blocks/Button';
import $ from 'jquery';
import ReactQuill from 'react-quill';
import './ArticleForm.css'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';


const ArticleForm = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  let { articleId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  let article = useSelector(selectArticle(articleId));
  const formType = articleId ? 'Update' : 'Create';
  const active = (object) => object ? 'active' : '';
  if (formType === 'Create') {
    article = { title: '', body: '', blurb: '', topic: '' }
  }
  const [title, titleChange] = useInput(article.title);
  const [body, setBody] = useState(article.body);
  const [blurb, blurbChange] = useInput(article.blurb);
  // TODO -> make the setter convert into array, and then render split with spaces
  // format each word to look like tag within input box
  const [topic, topicChange] = useInput(article.body);
  const modules = {
    toolbar: [
      // [{ 'header': [false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  const formats = [
    // 'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  $('textarea').on('input', function() {
    $(this).outerHeight(40).outerHeight(this.scrollHeight);
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!sessionUser) throw new Error('you must be logged in to bookmark a post');
    article = {...article, title, topic, blurb, body};
    if (formType === 'Create') {
      articleId = await dispatch(createArticle(article));
      if (articleId) history.push(`/articles/${articleId}`);
    } else {
      dispatch(updateArticle(article))
        .then(history.push(`/articles/${articleId}`));
    }
  }

  console.log('body');
  console.log(body);

  if (!sessionUser) return <Redirect to='/login' />;
  return (
    <div className='article-create-page'>
      <form className='article-create-form' onSubmit={handleSubmit} >
      <div className='pair'>
        <div className={`label title ${active(title)}`}>Title</div>
        {/* <ReactQuill theme='bubble' value={title} placeholder='What will you name it?' onChange={titleChange} /> */}
        <input label=''
            // containername='input-ctnr title'
            className='input title'
            type='text'
            value={title}
            onChange={titleChange}
            placeholder=''
            // size='140'
            required
          />
      </div>
      <div className='pair'>
        <div className={`label topic ${active(topic)}`}>Topic</div>
        <input label=''
            // containername='input-ctnr topic'
            className='input topic'
            type='text'
            value={topic}
            onChange={topicChange}
            placeholder='Up to 20 characters'
            size='140'
            maxlength='20'
            required
          />
        {/* <ReactQuill theme='bubble' value={blurb} onChange={blurbChange} /> */}
      </div>
      <div className='pair'>
        <div className={`label blurb ${active(blurb)}`}>Blurb</div>
        {/* <ReactQuill theme='bubble' value={topic} onChange={topicChange} /> */}
        <input label=''
            // containername='input-ctnr blurb'
            className='input blurb'
            type='text'
            value={blurb}
            onChange={blurbChange}
            placeholder='Up to 120 characters (optional)'
            maxlength='120'
            // required
          />
      </div>
      <div className='pair body'>
        <div className={`label body ${active(body)}`}>Body</div>
        <ReactQuill theme='snow'
                    modules={modules}
                    formats={formats}
                    value={body}
                    onChange={setBody}
                    id='reactquill'>
        </ReactQuill>
      </div>
        <div className='submit-compose-buttons'>
          <div className='upload-images'>
            <label>Images</label>
            {/* <input
              type='file'
              accept='.jpg, .jpeg, .png'
              multiple
              onChange={updateFiles}
              id='choose-files'
            /> */}
          </div>
      </div>
        <Button type='submit' label='Submit Article'/>
      </form>
    </div>
  )
}

export default ArticleForm;
