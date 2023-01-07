import './SplashPage.css';


import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchArticles } from '../../store/articles';

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


const SplashPage = props => {
  const dispatch = useDispatch();
  const history = useHistory();
  const articles = useSelector(state => Object.values(state.articles))


  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  const topSix = useMemo(() => articles.filter(article => article.id <= 6));

  return (
    <div className="splash-1">
      <div className="splash-1-1">
        <h1 className="stay-curious_">Stay curious.</h1>
        <p className="discover-stories_">Discover stories, thinking, and expertise from writers on any topic.</p>
      </div>
    </div>
  )
}


export default SplashPage;
