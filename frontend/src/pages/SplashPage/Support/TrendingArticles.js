
import React from 'react'
import { useSelector } from 'react-redux';
import TrendingTile from '../../../components/ArticleTile/TrendingTile';
import { selectTrending } from '../../../store/articles'

const TrendingArticles = () => {
  const trending = useSelector(selectTrending(6));

  return (
    <div className='trending-article-container'>

    <div className="trending-header">
      <h6>Trending on Medium</h6>
    </div>

    <div className="trending-articles">
      {trending && trending.map((article, idx) => { return (
        <TrendingTile key={article.uniqueId} idx={idx} article={article}/>
      )})}
    </div>

    </div>
  )
}

export default TrendingArticles