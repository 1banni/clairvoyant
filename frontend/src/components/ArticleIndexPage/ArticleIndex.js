
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles } from '../../store/articles';
import ArticleListItem from './ArticleIndexItem';


const ArticleList = props => {
  const articles = useSelector(state => Object.values(state.articles));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <>
      <div className='article-list-container'>
        <h1>Articles</h1>
        <ol>
          {articles.map(article => <ArticleListItem article={article} key={article.id} />)}
        </ol>
      </div>
    </>
  )
}


export default ArticleList;
