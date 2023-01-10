import './SplashPage.css';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchArticles, selectTopics } from '../../store/articles';
import SplashPageAnimation from '../../components/Animations/SplashPageAnimation';
import Button from '../../blocks/Button'
import ArticleIndex from '../../components/ArticleIndex/ArticleIndex';
import TopicButton from '../../blocks/Button/TopicButton';

let mGrid = [
  [0,0,0,1,1,2,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,2,1,1,1,1,1,0,1,1,1,2],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1],
  [0,0,0,0,0,0,0,0,0,2,0,0,0,1,1,0],
  [0,0,0,1,1,0,0,2,2,1,2,1,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,2,0,1,0,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
  [0,0,0,0,0,0,0,0,0,0,2,1,2,2,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0],
  [0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,0,2,1,0,1,0,1,1,0]
]


const featuredArticles = [
  3, 5, 6, 8, 9, 12
]

const SplashPage = props => {
  const dispatch = useDispatch();
  const articles = useSelector(state => Object.values(state.articles));
  const topics = useSelector(selectTopics());



  const topSix = useMemo( () => {
    articles.filter( article => featuredArticles.includes(article.id) )
  });
  // TODO: Implement line below and in useEffect
  // const topics = useSelector(state => Object.values(state.topics));


  useEffect(() => {
    dispatch(fetchArticles());
    // dispatch(fetchTopics());
  }, [dispatch])


  console.log('topics');
  console.log(topics);
  return (
    <>
    <div className="splash">
      <div className="splash-1">
        <div className="splash-1-1">
          <div className="splash-title">
            <h1 className="stay-curious_">Stay curious.</h1>
            <p className="discover-stories_">Discover stories, thinking, and expertise from writers on any topic.</p>
            <Button className="btn get-started_" label="Start reading"/>
          </div>
          <SplashPageAnimation />
        </div>
      </div>

      <div className="splash-2">
        <div className="splash-2-1">
  
        </div>
      </div>

      <div className="splash-3">
        <div className="splash-3-1">

          <div className="splash-article-feed">
            <ArticleIndex />
          </div>

          <div className="splash-sidebar">
            <div className="top">
              <div className="discover-more_">DISCOVER MORE OF WHAT MATTERS TO YOU</div>
              <div className="topics">
              {topics.map(topic => {return (
                <TopicButton key={topic.uniqueId} topic={topic}/>
              )})}
              </div>
            </div>

            <div className="sidebar-footer">Links

            </div>

          </div>

        </div>
      </div>
    </div>
    </>
  )
}


export default SplashPage;
