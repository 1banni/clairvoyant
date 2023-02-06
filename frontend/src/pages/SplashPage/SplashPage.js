import './SplashPage.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectTopics } from '../../store/articles';
import SplashPageAnimation from '../../blocks/Animations/SplashPageAnimation';
import Button from '../../blocks/Button'
import ArticleIndex from '../../components/ArticleIndex/ArticleIndex';
import TopicButton from '../../blocks/Button/TopicButton';
import TrendingArticles from '../../blocks/Articles/Trending';
import UniqUtil from '../../utils/UniqUtil';
import SignUpModal from '../../modals/SignUpModal';
import BanniLinks from '../../blocks/BanniLinks';



const SplashPage = props => {
  const dispatch = useDispatch();
  const topics = useSelector(selectTopics());

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch])

  return (
    <>
    <div className='splash'>
      <div className='splash-1'>
        <div className='splash-1-1'>

          <div className='splash-title'>
            <h1 className='stay-curious_'>Stay curious.</h1>
            <p className='discover-stories_'>Discover stories, thinking, and expertise from writers on any topic.</p>
            <Button className='btn get-started_' label='Start reading' modal={ SignUpModal }/>
          </div>

          <SplashPageAnimation />

        </div>
      </div>

      <div className='splash-2'>
        <div className='splash-2-1'>
          <div><TrendingArticles /></div>
        </div>
      </div>

      <div className='splash-3'>
        <div className='splash-3-1'>

          <div className='splash-article-feed'>
            <ArticleIndex />
          </div>

          <div className='splash-sidebar'>
            <div className='top'>

              <div className='label-1 discover-more_'>DISCOVER MORE OF WHAT MATTERS TO YOU</div>

              <div className='topics'>
                {topics.slice(0,13).map(topic => {return (
                <TopicButton key={UniqUtil.key(topic)} topic={topic}
                  containername='btn-ctnr topic rect'
                  className='btn topic rect'
                  textname='btn-text topic rect'
                />)})}
              </div>

              <div className='separator'>

              </div>

              <div className='links'>
                <div className='label-1'>
                  BY WILL BANNISTER
                </div>
                <BanniLinks />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}


export default SplashPage;
