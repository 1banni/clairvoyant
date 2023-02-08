import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import { fetchBookmarks } from '../../store/bookmarks';
import ArticleTile from '../../components/ArticleTile/ArticleTile';
// import './ArticleTile.css';


const ArticleIndex = ({imageDims, ...props}) => {
  const dispatch = useDispatch();
  const articles = useSelector(state => Object.values(state.articles.all));
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(fetchArticles());
    if (sessionUser) dispatch(fetchBookmarks(sessionUser.id));
  }, [dispatch, sessionUser]);

  return (
    <>
      <div className='article-index-ctnr'>
        <div className='article-index'>

          {articles.map( article => (
          <ArticleTile
            articleId={article.id}
            key={article.id}
            imageDims={imageDims}
          />
          ))}

        </div>
      </div>
    </>
  )
}

export default ArticleIndex;
