import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import { fetchBookmarks } from '../../store/bookmarks';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
// import './ArticleTile.css';


const ArticleIndex = props => {
  const articles = useSelector(state => Object.values(state.articles));
  const bookmarks = useSelector(state => Object.values(state.bookmarks));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchBookmarks());
  }, [dispatch]);

  return (
    <>
      <div className='article-index-wrapper'>
        <div className='article-index'></div>
        <ol>
          {articles.map(article => <ArticleTile article={article} key={article.id} />)}
        </ol>
      </div>
      <div className='staff-picks'>Staff Picks
      </div>
    </>
  )
}

export default ArticleIndex;
