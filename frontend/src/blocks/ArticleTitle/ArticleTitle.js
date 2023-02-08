import { Markup } from 'interweave';
import React from 'react';
import './ArticleTitle.css';

const ArticleTitle = ({
  article,
  lineclamp,
  includeBlurb,
  blurbLength,
  blurbLineClamp,
  ...props
}) => {

  lineclamp ||= 'line-clamp-2';
  blurbLength ||= 115;
  blurbLineClamp ||= 'line-clamp-2';

  const blurb = article => {
    let _blurb = article.blurb ? article.blurb : article.body;
    let parsed_blurb = _blurb.split('\\n').join(' ')
    return parsed_blurb.length > blurbLength
      ? parsed_blurb.slice(0,blurbLength) + '...'
      : parsed_blurb;
  }

  if (!article) return <></>;
  return (
    <div className='title-and-blurb' key={article.id} {...props}>
      <h4 className={`title ${lineclamp}`}>{article.title}</h4>
      {includeBlurb && (
      <div className={`blurb ${lineclamp}`}>
        <Markup content={blurb(article)} />
      </div>
      )}
    </div>
  );
};

export default ArticleTitle;