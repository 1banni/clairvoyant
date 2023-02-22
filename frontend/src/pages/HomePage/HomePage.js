import './HomePage.css';
import React, { useEffect, useMemo, useState } from 'react';
import TopicButton from '../../blocks/Button/TopicButton';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../store/articles';
import ArticleTile from '../../components/ArticleTile';

const HomePage = () => {
  const topics = ["Art", "Architecture", "History", "Movies",
                  "Books", "Music", "Coding", "Cooking", "Gaming"]
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user)
  const articles = useSelector(state => Object.values(state.articles.all));
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


  console.log('topic');
  console.log(activeTopic);

  const handleTopic = (topic) => {
    if (topic === activeTopic) {
      setActiveTopic('')
    }
    else setActiveTopic(topic)
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
            excludeImages={true}
            blurbLength={300}
            blurbLineClamp={'line-clamp-3'}
          />
        ))}
        </div>

      </section>

      <section className='sidebar'>

        <div className='user'>USER SQUARE
          {/* MAP SELECTED TOPIC BUTTONS HERE */}
        </div>

        <div className='more-articles'>MORE STUFF

        </div>

      </section>
    </div>

  );
};

export default HomePage;