import React from 'react'
import { Redirect } from 'react-router-dom'

const Body = ({body, ...props}) => {
  if (!body) return <Redirect to="/articles"/>;

  let bodyArray = body.split("\\n");
  console.log('bodyArray');
  console.log(bodyArray);

  return (
    <div className="article-body" {...props}>
      {bodyArray.map(paragraph => {return (
        <div className="article-paragraph">{paragraph}</div>
      )})}
    </div>
  );
};

export default Body;