import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import ArticleIndexItem from '../../components/ArticleTile/ArticleTile';
// import './ArticleTile.css';


const ArticleIndex = props => {
  const articles = useSelector(state => Object.values(state.articles));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <>
      <div className="article-index-wrapper">
        <div className="article-index"></div>
        <ol>
          {articles.map(article => <ArticleIndexItem article={article} key={article.id} />)}
        </ol>
      </div>
      <div className="staff-picks">Staff Picks
      </div>
    </>
  )
}

export default ArticleIndex;
