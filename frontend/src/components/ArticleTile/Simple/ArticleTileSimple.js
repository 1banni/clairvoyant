import './ArticleTileSimple.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ArticleAuthor from '../../../blocks/ArticleAuthor';
import ArticleTitle from '../../../blocks/ArticleTitle';
import NavUtil from '../../../utils/NavUtil';

const ArticleTileSimple = ({articleId}) => {
  const history = useHistory();
  // const article = useSelector(store => store.articles[articleId]);

  console.log('articleId');
  console.log(articleId);
  console.log('article');
  // console.log(article);
  // if (!article) return <></>;
  return (
    <div className='article-tile-simple' >
      {/* <div className='article-into'>
        <ArticleAuthor name={article.authorName}/>
        <ArticleTitle
          article={article}
          includeBlurb={true}
          // onClick={NavUtil.goToArticleById(history, articleId)}
        />
      </div> */}
      ArticleTileSimple
    </div>
  );
};

export default ArticleTileSimple;