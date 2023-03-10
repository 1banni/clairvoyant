
import React from 'react'
import { useSelector } from 'react-redux';
import { PNG } from '../../../assets';
import IconWithLabel from '../../IconWithLabel';
import TrendingTile from '../../../components/ArticleTile/TrendingTile';
import { selectTrendingArticles } from '../../../store/articles'

const TrendingArticles = () => {
  const trending = useSelector(selectTrendingArticles(6));

  return (
    <div className='trending-article-container'>

      <IconWithLabel containername='icon-with-label-ctnr trending-on-clairvoyant'
                     labelname='label-1'
                     label='Trending on Medium'>
        <img className='trending-img' src={PNG.TRENDING} size='10px' alt='trending-img'/>
      </IconWithLabel>

      <div className='trending-articles'>
        {trending && trending.map((article, idx) => {return (
          <TrendingTile key={article.id} idx={idx} article={article} photoURL={article.authorPhotoUrl}/>
        )})}
      </div>

    </div>
  )
}

export default TrendingArticles;