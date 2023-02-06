import React from 'react';
import { Redirect, useHistory, withRouter} from 'react-router-dom';
import './ArticleTile.css';
import Author from '../../blocks/ArticleAuthor';
import ArticleDetail from '../../blocks/ArticleDetail';

const TrendingTile = ({ article, idx }) => {
  let history = useHistory();
  const goToArticle = () => {
    history.push(`/articles/${article.id}`);
  }

  if (!article) return <Redirect to='/'/>;
  return (
    <div className='trending-tile-wrapper'>
      <div className='trending-number'>
        {'0' + (idx + 1).toString()}
      </div>

      <div className='trending-tile' key={article.id}>
        <div className='trending-tile-1'>
          <Author name={article.authorName}/>
        </div>
        <div className='trending-tile-2'>
          <h4 className='title line-clamp-2' onClick={goToArticle}>
            {article.title}
          </h4>
        </div>
        <div className='trending-tile-3'>
          <ArticleDetail article={article}/>
        </div>
      </div>
        {/* <div className='spacing-between-tiles'/> */}
    </div>
  );
};

export default withRouter(TrendingTile);
