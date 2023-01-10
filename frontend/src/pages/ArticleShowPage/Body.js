import React from 'react'
import { Redirect } from 'react-router-dom'
import TextUtil from '../../utils/TextUtil';

const Body = ({body, ...props}) => {
  if (!body) return <Redirect to="/articles"/>;


  return (
    <div className="article-body" {...props}>
      {TextUtil.BodyToArray(body).map(paragraph => {return (
        <div className="article-paragraph">{paragraph}</div>
      )})}
    </div>
  );
};

export default Body;