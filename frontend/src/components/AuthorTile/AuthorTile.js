import './AuthorTile.css';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import ColorUtil from '../../utils/ColorUtil';
import ArticleDetail from '../../blocks/ArticleDetail';
import { Redirect } from 'react-router-dom';
import Bookmark from '../../blocks/Bookmark';
import ShareLink from '../../blocks/ShareLink';

const AuthorTile = ({article}) => {



  if (!article) return <Redirect to="/articles"/>;
  const styleOptions = {
    stroke: ColorUtil.nameToColor(article.author.name),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }
  return (
    <div className="author-tile-1 at1">
      <div className="left a3">
        <FaUserCircle className="user-icon"
          size="40px"
          style={styleOptions}
        />
      </div>
      <div>
        <div className='right a4'>
          <div className="right a41">
            <div className="author-name">{article.author.name}</div>
            <div className='share-bookmark'>
              <ShareLink />
              <Bookmark articleId={article.id} />
            </div>
          </div>
          <div className="abb">
            <ArticleDetail article={article}/>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default AuthorTile;