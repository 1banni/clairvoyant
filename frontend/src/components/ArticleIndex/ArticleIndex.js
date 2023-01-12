import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import { fetchBookmarks } from '../../store/bookmarks';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
// import './ArticleTile.css';


const ArticleIndex = props => {
  const dispatch = useDispatch();
  const articles = useSelector(state => Object.values(state.articles));

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <>
      <div className="article-idx-ctnr">
        <div className="article-idx">
          {articles.map( article => {
            return <ArticleTile
              article={article}
              key={article.id} />
          })}
        </div>
      </div>
    </>
  )
}

export default ArticleIndex;
