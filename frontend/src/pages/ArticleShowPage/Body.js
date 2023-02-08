import { Markup } from 'interweave';
import React from 'react'
import { Redirect } from 'react-router-dom'
import TextUtil from '../../utils/TextUtil';
import UniqUtil from '../../utils/UniqUtil';

const Body = ({body, ...props}) => {
  if (!body) return <Redirect to='/articles'/>;


  return (
    <div className='article-body' {...props}>
      {TextUtil.BodyToArray(body).map(paragraph => {return (
        <div key={paragraph} className='article-paragraph'>
          <Markup content={paragraph} />
        </div>
      )})}
    </div>
  );
};

export default Body;