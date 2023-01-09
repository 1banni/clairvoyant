import React from 'react';
import Button from '../../Button';
import DateUtil from '../../../utils/DateUtil';
import { BsBookmarks } from 'react-icons/bs';
import { BsBookmarksFill } from 'react-icons/bs';
import { ReactComponent as WriteIcon } from '../../../assets/svg/write-logo.svg'
import './Detail.css';
import Bookmark from './Bookmark/Bookmark';


const Detail = ({article, ...props}) => {


  return (
    <div className="article-tile-detail">
        <div className="article-tile-detail-1">
          <div className="article-tile-date">
            {DateUtil.longForm(article.createdAt)}
          </div>
          <div className="detail-separator">·</div>
          <Button className="btn topic round"
                  containerName="btn-container topic"
                  label={article.topic}
          />
        </div>
        <div className="article-tile-detail-2">
          <Bookmark userBookmarkStatus={article.userBookmarkStatus}
                    articleId={article.id}
                    bookmarks={article.bookmarkId}
          />
        </div>
      </div>
  );
}

export default Detail