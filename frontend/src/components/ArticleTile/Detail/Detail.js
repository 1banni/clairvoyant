import React from 'react';
import Button from '../../Button';
import { dateLongForm } from '../../../utils/formatDate';
import './Detail.css';

const Detail = ({article, ...props}) => {


  const toggleBookmark = () => {

  }

  return (
    <div className="article-tile-detail">
        <div className="article-tile-detail-1">
          <div className="article-tile-date">
            {dateLongForm(article.createdAt)}
          </div>
          <div>
            <Button className="topic-btn-round"
                    label={article.topic} >

            </Button>
          </div>
        </div>
        <div className="article-tile-detail-2">
          <Button className="bookmark-btn"
                  containerName="bookmark-btn-container"
                  onClick={ toggleBookmark }
                  label="bookmark">
          </Button>
        </div>
      </div>
  );
}

export default Detail