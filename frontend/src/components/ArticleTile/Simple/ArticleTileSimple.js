import './ArticleTileSimple.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleAuthor from '../../../blocks/ArticleAuthor';
import ArticleTitle from '../../../blocks/ArticleTitle';
import NavUtil from '../../../utils/NavUtil';
import Image from '../../../blocks/Image/Image';

const ArticleTileSimple = ({articleId}) => {
  const history = useHistory();
  const article = useSelector(store => store.articles.all[articleId]);

  // console.log('articleId');
  // console.log(articleId);
  // console.log('article');
  // console.log(article);
  if (!article) return <></>;
  return (
    <div className='article-tile-simple'
         onClick={NavUtil.goToArticleById(history, articleId)}>
      <div className='article-into'>
        <ArticleAuthor name={article.authorName}/>
        <ArticleTitle
          article={article}
          includeBlurb={false}
          lineclamp='line-clamp-3'
          // onClick={NavUtil.goToArticleById(history, articleId)}
        />
      </div>
      <div className='article-image'>
      {article.imageUrls && (article.imageUrls.length !== 0) && (
        <Image url={article.imageUrls[0]} width='200' height='134'/>
      )}
      </div>
    </div>
  );
};

export default ArticleTileSimple;