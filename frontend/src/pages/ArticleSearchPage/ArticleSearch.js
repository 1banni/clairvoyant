import { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { FormErrors, Input } from '../../components/Form';
import { useInput, useSubmit } from '../../hooks';
import { fetchArticles } from '../../store/articles';
import { login } from '../../store/session';
import ArticleIndexItem from '../ArticleIndexPage/ArticleIndexItem';
import bookmark from '../../assets/svg/bookmark.svg'

export default function ArticleSearch({incomingTopic, incomingPageNum}) {
  const dispatch = useDispatch();
  const history = useHistory();
  incomingTopic ||= '';
  incomingPageNum ||= 1;
  const [topic, setTopic] = useInput('')
  const [pageNum, setPageNum] = useInput(1);
  const articles = useSelector(state => Object.values(state.articles));


  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);

  const filteredArticles = useMemo(() => {
    return topic
      ? articles.filter(article => article.topic === topic)
      : articles
  })

  // const handleTopicQuery = (e) => {
  //   dispatch(fetchArticles({topic: e.target.value}));
  // }

  return (
    <>
    <div className="article-search-page">
      <div className="article-search-wrapper">
        <div className="articles-header"><h1>Articles</h1></div>
          <div className="article-search">
            {/* <form className="login-form-container" onSubmit={handleSubmit}> */}
            {/* <form className="article-search-form" onSubmit={e=>e.preventDefault()}> */}
              <Input
                label="topic"
                placeholder="Topic Search"
                type="text"
                value={topic}
                onChange={setTopic}
              />
              {/* <Button type="submit" label="Search"/>
            </form> */}
          </div>
          <ol>
            {filteredArticles.map(article => <ArticleIndexItem article={article} key={article.id} />)}
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
