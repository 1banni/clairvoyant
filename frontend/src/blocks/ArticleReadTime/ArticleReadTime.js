import React from 'react';
import TimeUtil from '../../utils/TimeUtil';
import './ArticleReadTime.css';

const ArticleReadTime = ({body, ...props}) => {
  const readTime = TimeUtil.ReadTime(body);

  return (
    <div className="article-read-time" {...props}>

    </div>
  )
}

export default ArticleReadTime