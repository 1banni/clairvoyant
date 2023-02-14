import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import $ from 'jquery';
import { createArticle, selectArticle, updateArticle } from '../../store/articles';
import Button from '../../blocks/Button';
import './ArticleForm.css'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import useStateChange from '../../hooks/useStateChange';
import ModalUtil from '../../context/ModalUtil';
import LoginModal from '../../modals/LoginModal';


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
  const [title, setTitle, titleChange] = useStateChange(article.title);
  const [topic, setTopic, topicChange] = useStateChange(article.body);
  const [body, setBody] = useState(article.body);
  const [blurb, setBlurb, blurbChange] = useStateChange(article.blurb);
  const [photoFiles, setPhotoFiles] = useState([]);
  const [photoUrls, setPhotoUrls] = useState([]);
  const [errors, setErrors] = useState([]);
  // TODO -> make the setter convert into array, and then render split with spaces
  // format each word to look like tag within input box
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
    if (!sessionUser) return ModalUtil.open(LoginModal);

    const formData = new FormData();
    formData.append('article[title]',title);
    formData.append('article[topic]',topic);
    if (blurb) formData.append('article[blurb]',blurb);
    formData.append('article[body]',body);

    if (photoFiles?.length > 0) {
      photoFiles.forEach(photo => {
        formData.append('article[photos][]',photo);
      });
    }

    if (formType === 'Create') {
      articleId = dispatch(createArticle(formData))
        .catch( async res => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text();
          }

          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        })

      if (articleId) {
        clearForm();
        history.push(`/articles/${articleId}`);
      }
    } else {
      dispatch(updateArticle(formData, articleId))
        .catch( async res => {
          let data;
          try {
            data = await res.clone().json();
          } catch {
            data = await res.text();
          }

          if (data?.errors) setErrors(data.errors);
          else if (data) setErrors([data]);
          else setErrors([res.statusText]);
        })
        .then(history.push(`/articles/${articleId}`));
    }
  }

  const handlePhotos = async e => {
    const files = Array.from(e.target.files);

    if (files) {
      files.forEach(file => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          // setPhotoFiles(prev => prev.push(file));
          // setPhotoUrls(prev => prev.push(fileReader.result));
          setPhotoFiles(prev => [...prev, file]);
          setPhotoUrls(prev => [...prev, fileReader.result]);
        };
      });
    }
  };

  const handleReplacePhotos = async e => {
    setPhotoFiles([]);
    setPhotoUrls([]);
    const files = Array.from(e.target.files);
    if (files) {
      files.forEach(file => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          setPhotoFiles(prev => [...prev, file]);
          setPhotoUrls(prev => [...prev, fileReader.result]);
        };
      });
    }
  };

  const clearForm = () => {
    setTitle('');
    setBody('');
    setTopic('');
    setBlurb('');
    setPhotoFiles([]);
    setPhotoUrls([]);
  }

  if (!sessionUser) ModalUtil.open(LoginModal);
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
          <input label=''
              className='input blurb'
              type='text'
              value={blurb}
              onChange={blurbChange}
              placeholder='Up to 120 characters (optional)'
              maxlength='120'
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



          <div className='upload-images'>
      { formType === 'Create'
        ? (
          <div className='pair'>
            <h4 className='upload-label'>Upload Photos</h4>
            <input
              type='file'
              accept='.jpg, .jpeg, .png'
              multiple
              onChange={handlePhotos}
              id='choose-files'
            />
          </div>
        ) : (
          <div className='pair'>
            <h4 className='upload-label'>Replace Existing Photos</h4>
            <input
              type='file'
              accept='.jpg, .jpeg, .png'
              multiple
              onChange={handleReplacePhotos}
              id='choose-files'
            />
          </div>
        )
      }
          <div className='pair'>
            <h4 className='preview-images-label'>Image Preview</h4>
            {/* TODO - if photoUrl is truthy, render an image of that photo with a heading of Image preview */}
            {photoUrls && photoUrls.map(photoUrl => {return (
              <img src={photoUrl} key={photoUrl.uniqeId} alt='preview' height='100px'/>
            )})}
          </div>
        </div>

        <div className='pair submit-compose-button'>
          <div className='upload-label'></div>
          <Button type='submit' label='Submit Article'
            className='btn classic'
            containername='btn-ctnr classic'
          />
        </div>
      </form>
      <div className='form-errors'>
        {errors && errors.map(error => (
          <div key={error}>
            {error}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArticleForm;
