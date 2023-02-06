import React from 'react';
import TextUtil from '../../utils/TextUtil';
import TimeUtil from '../../utils/TimeUtil';
import './ArticleReadTime.css';

const ArticleReadTime = ({body, ...props}) => {
  const readTime = TimeUtil.ReadTime(TextUtil.BodyToArray(body));

  return (
    <div className='article-tile-read-time' {...props}>
      {readTime}
    </div>
  )
}

export default ArticleReadTime