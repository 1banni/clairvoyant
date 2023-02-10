import './ArticleTileSimple.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleAuthor from '../../../blocks/ArticleAuthor';
import ArticleTitle from '../../../blocks/ArticleTitle';
import NavUtil from '../../../utils/NavUtil';
import Image from '../../../blocks/Image/Image';

const ArticleTileSimple = ({articleId, imageWidth, excludeImage}) => {
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const article = useSelector(state => state.articles.all[articleId]);
  imageWidth ||= '100';
  excludeImage ||= false;

  if (!article) return <></>;
  return (
    <div className='article-tile-simple'
         onClick={NavUtil.goToArticleById(history, articleId)}>
      <div className='article-into'>
        <ArticleAuthor photoURL={article.authorPhotoUrl} user={article.author} userId={article.authorId} name={article.authorName}
        />
        <ArticleTitle
          article={article}
          includeBlurb={false}
          lineclamp='line-clamp-3'

          // onClick={NavUtil.goToArticleById(history, articleId)}
        />
      </div>
      {!excludeImage &&
      <div className='article-image'>
      {article.imageUrls && (article.imageUrls.length !== 0) && (
        <Image url={article.imageUrls[0]} width={imageWidth} />
      )}
      </div>}
    </div>
  );
};

export default ArticleTileSimple;