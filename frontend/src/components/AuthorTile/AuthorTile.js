import './AuthorTile.css';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import ColorUtil from '../../utils/ColorUtil';
import ArticleDetail from '../../blocks/ArticleDetail';
import { Redirect } from 'react-router-dom';
import Bookmark from '../../blocks/Bookmark';
import ShareLink from '../../blocks/ShareLink';

const AuthorTile = ({article, author}) => {
  const color = () => ColorUtil.nameToColor(article.authorName);
  if (!article) return <Redirect to="/articles"/>;

  console.log('article');
  console.log(article.author);
  console.log('article.authorName');
  console.log(article['authorName']);

  const styleOptions = {
    stroke: color(),
    fill: "white",
    strokeWidth: "50",
    // size: "5x"
  }

  return (
    <div className="author-tile-1 ">
      <div className="l">
        <FaUserCircle className="user-icon"
          size="40px"
          style={styleOptions}
        />
      </div>
      <div>
        <div className='r'>
          <div className="rt">
            <div className="author-name">{article.authorName}</div>
            <div className='share-bookmark'>
              <ShareLink />
              <Bookmark articleId={article.id} />
            </div>
          </div>
          <div className="rb">
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