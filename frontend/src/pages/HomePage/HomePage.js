import './HomePage.css';
import React, { useEffect, useMemo, useState } from 'react';
import TopicButton from '../../blocks/Button/TopicButton';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import ArticleTile from '../../components/ArticleTile';
import AuthorTileSquare from '../../components/AuthorTile/Square/AuthorTileSquare';
import ArticleTileSimple from '../../components/ArticleTile/Simple/ArticleTileSimple';
import BanniLinks from '../../blocks/BanniLinks';

const HomePage = () => {
  const topics = ["Architecture", "History", "Art", "Climate",
                  "Books", "Policy", "Coding", "Recipes", "Gaming"]
                  // "Movies", "Music",]
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const articles = useSelector(state => Object.values(state.articles.all));
  const articleSubset = [3, 10, 11, 8, 13];
  const [activeTopic, setActiveTopic] = useState();

  const filteredArticles = useMemo(() => {
    const lowerCaseQuery = activeTopic?.toLowerCase();

    return activeTopic
      ? articles.filter(article => (
        (article.topic.toLowerCase().includes(lowerCaseQuery))
        // || (article.body.toLowerCase().includes(lowerCaseQuery))
        // || (article.title.toLowerCase().includes(lowerCaseQuery))
      ))
      : articles
  }, [activeTopic, articles]);

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch]);


  const handleTopic = (topic) => {
    (topic === activeTopic
    ? setActiveTopic('')
    : setActiveTopic(topic));
  }

  if (!sessionUser) return history.push('/');
  return (
    <div className='homepage'>
      <section className='main'>
        <h1 className='header'>
          Welcome, {sessionUser.name}
        </h1>

        <div className='topics'>
          {topics.map(topic => {return (
          <TopicButton key={topic} topic={topic}
            containername='btn-ctnr topic rect'
            className='btn topic rect'
            textname='btn-text topic rect'
            onClick={() => handleTopic(topic)}
          />)})}
        </div>

        <div className='articles'>
        {filteredArticles.map(article => (
          <ArticleTile articleId={article.id} key={article.id}
            excludeImages={false}
            blurbLength={300}
            blurbLineClamp={'line-clamp-3'}
          />
        ))}
        </div>

      </section>

      <section className={'sidebar'} >
        <div className='user'>
          <AuthorTileSquare author={sessionUser} photoURL={sessionUser.photoUrl} authorId={sessionUser.id}/>
        </div>

              <div className='more-articles'>
                <h4 className='more-from-medium_'>More from Medium</h4>
                {articleSubset.map(articleId => (
                  <ArticleTileSimple articleId={articleId} key={articleId}/>
                ))}
              </div>

              <div className='links'>
                  <h4 className='label-1'>BY WILL BANNISTER</h4>
                  <BanniLinks />
              </div>
      </section>
    </div>

  );
};

export default HomePage;