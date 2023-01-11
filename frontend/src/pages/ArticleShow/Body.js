import React from 'react'
import { Redirect } from 'react-router-dom'
import TextUtil from '../../utils/TextUtil';
import UniqUtil from '../../utils/UniqUtil';

const Body = ({body, ...props}) => {
  if (!body) return <Redirect to="/articles"/>;


  return (
    <div className="article-body" {...props}>
      {TextUtil.BodyToArray(body).map(paragraph => {return (
        <div key={UniqUtil.key(paragraph)} className="article-paragraph">
          {paragraph}
        </div>
      )})}
    </div>
  );
};

export default Body;