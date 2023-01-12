import React from 'react';
import './ArticleTitle.css';

const ArticleTitle = ({article, ...props}) => {
  return (
    <div className="title-and-blurb" key={article.id} {...props}>
      <h4 className="title line-clamp-2">{article.title}</h4>
      <p className="blurb line-clamp-2">Blurb: TODO {article.body.slice(0,130)}</p>
    </div>
  );
};

export default ArticleTitle;