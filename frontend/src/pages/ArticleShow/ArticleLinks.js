
import React from 'react';
import ClapButton from '../../blocks/Button/ClapButton';
import CommentButton from '../../blocks/Button/CommentButton/CommentButton';

const ArticleLinks = ({article, toggleCommentDisplay}) => {
  return (
    <div className="article-links">
      <div className="clap-comment">
        <ClapButton article={article}/>
        <CommentButton article={article}
          toggleCommentDisplay={toggleCommentDisplay}
        />
      </div>
      <div className="share-bookmark">
        <div className='share'>Share</div>
        <div className='bookmark'>Bookmark</div>
      </div>
    </div>
  );
};

export default ArticleLinks;