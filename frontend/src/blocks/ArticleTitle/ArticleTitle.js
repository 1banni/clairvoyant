import React from 'react';
import './ArticleTitle.css';

const ArticleTitle = ({article, ...props}) => {
  const blurb = article => {
    let _blurb = article.blurb ? article.blurb : article.body;
    console.log('_blurb');
    console.log(_blurb);

    let parsed_blurb = _blurb.split('\\n').join(' ')
    console.log('parsed_blurb');
    console.log(parsed_blurb);
    return parsed_blurb.length > 115
      ? parsed_blurb.slice(0,115) + '...'
      : parsed_blurb;
  }

  return (
    <div className="title-and-blurb" key={article.id} {...props}>
      <h4 className="title line-clamp-2">{article.title}</h4>
      <p className="blurb line-clamp-2">{blurb(article)}</p>
    </div>
  );
};

export default ArticleTitle;