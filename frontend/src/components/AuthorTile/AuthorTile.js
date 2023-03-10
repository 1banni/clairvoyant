import './AuthorTile.css';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import ColorUtil from '../../utils/ColorUtil';
import ArticleDetail from '../../blocks/ArticleDetail';
import { Redirect } from 'react-router-dom';
import Bookmark from '../../blocks/Bookmark';
import ShareLink from '../../blocks/ShareLink';
import Tooltip from '../../blocks/Tooltip/Tooltip';
import Image from '../../blocks/Image/Image';

const AuthorTile = ({article, children, photoURL, author}) => {
  const color = () => ColorUtil.nameToColor(article.authorName);

  const styleOptions = {
    stroke: color(),
    fill: 'white',
    strokeWidth: '50',
  }

  if (!article) return <Redirect to='/articles'/>;
  return (
    <div className='author-tile-1 '>
      <div className='l'>
      {photoURL
      ? <Image url={photoURL} alt={photoURL}
               className='image icon'
               wrapper='image-wrapper icon'
        />
      : <FaUserCircle
          style={styleOptions}
      />}
      </div>

      <div>
        <div className='r'>

          <div className='rt'>

            <div className='author-name'>{article.authorName}</div>

            <div className='share-bookmark'>
              <Tooltip label={<ShareLink />} timeout={2000} >
                <div className='link-copied'>
                  Link copied to clipboard
                </div>
              </Tooltip>
              <Bookmark articleId={article.id} />
            </div>

          </div>

          <div className='rb'>
            <ArticleDetail article={article}>
              {children}
            </ArticleDetail>
          </div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default AuthorTile;