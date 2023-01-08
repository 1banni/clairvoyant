import React from 'react';
import { useHistory } from 'react-router-dom';
import './Title.css';

const Title = ({article, props}) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push(`/articles/${article.id}`);
  }

  return (
    <div className="title-and-blurb" key={article.id} onClick={goToArticle}>
      <h4 className="title">{article.title}</h4>
      <p className="blurb">Blurb: TODO {article.body.slice(0,130)}</p>
    </div>
  )
}

export default Title