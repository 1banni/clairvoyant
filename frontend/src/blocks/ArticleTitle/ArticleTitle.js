import React from 'react';
import { useHistory } from 'react-router-dom';
import './ArticleTitle.css';

const ArticleTitle = ({article, ...props}) => {
  return (
    <div className="title-and-blurb" key={article.id} {...props}>
      <h4 className="title">{article.title}</h4>
      <p className="blurb">Blurb: TODO {article.body.slice(0,130)}</p>
    </div>
  );
};

export default ArticleTitle;