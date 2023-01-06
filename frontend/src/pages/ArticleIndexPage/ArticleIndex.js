
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import ArticleIndexItem from './ArticleIndexItem';
import './ArticleIndex.css';


const ArticleIndex = props => {
  const articles = useSelector(state => Object.values(state.articles));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <>
    <div className="article-index-page">
      <div className="article-index-wrapper">
        <div className="articles-header"><h1>Articles</h1></div>
        <div className="article-index"></div>
        <ol>
          {articles.map(article => <ArticleIndexItem article={article} key={article.id} />)}
        </ol>
        <div>Loading...</div>
        <div>Error</div>
      </div>
      <div className="staff-picks">Staff Picks
      </div>
    </div>
    </>
  )
}


export default ArticleIndex;
