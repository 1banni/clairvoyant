import { Markup } from 'interweave';
import React from 'react';
import './ArticleTitle.css';

const ArticleTitle = ({article, includeBlurb, ...props}) => {
  const blurb = article => {
    let _blurb = article.blurb ? article.blurb : article.body;
    let parsed_blurb = _blurb.split('\\n').join(' ')
    return parsed_blurb.length > 115
      ? parsed_blurb.slice(0,115) + '...'
      : parsed_blurb;
  }

  return (
    <div className="title-and-blurb" key={article.id} {...props}>
      <h4 className="title line-clamp-2">{article.title}</h4>
      {includeBlurb && (
      <p className="blurb line-clamp-2">
        <Markup content={blurb(article)} />
      </p>
      )}
    </div>
  );
};

export default ArticleTitle;