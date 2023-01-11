
import React from 'react'
import Clap from '../../blocks/Button/ClapButton'

const ArticleLinks = ({article}) => {
  return (
    <div className="article-links">
      <div className="clap-comment">
        <Clap article={article}/>
        <div className='comment'>Comment</div>
      </div>
      <div className="share-bookmark">
        <div className='share'>Share</div>
        <div className='bookmark'>Bookmark</div>
      </div>
    </div>
  )
}

export default ArticleLinks