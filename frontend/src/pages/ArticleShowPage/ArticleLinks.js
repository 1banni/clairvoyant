
import React from 'react';
import ArticleBookmark from '../../blocks/Bookmark';
import ClapButton from '../../blocks/Button/ClapButton';
import CommentButton from '../../blocks/Button/CommentButton/CommentButton';
import ShareLink from '../../blocks/ShareLink';
import Tooltip from '../../blocks/Tooltip/Tooltip';

const ArticleLinks = ({article, toggleCommentDisplay}) => {
  const shareLinkOptions = { height: 53, width: 36 };

  if (!article) return <></>;
  return (
    <div className='article-links'>

      <div className='clap-comment'>
        <ClapButton article={article}/>
        <CommentButton article={article}
          toggleCommentDisplay={toggleCommentDisplay}
        />
      </div>

      <div className='share-bookmark'>
        <Tooltip label={<ShareLink /*size='60px'*/ options={shareLinkOptions} />} timeout={2000} >
          <div className='link-copied'>
            Link copied to clipboard
          </div>
          </Tooltip>
        <ArticleBookmark articleId={article.id} />
      </div>

      {/* <div className='share-bookmark'>
        <div className='share'>Share</div>
        <div className='bookmark'>Bookmark</div>
      </div> */}
    </div>
  );
};

export default ArticleLinks;