import './Image.css';
import React from 'react'


const Image = ({url, wrapper, className, ...props}) => {
  const imageUrl = url;
  wrapper ||= 'image-wrapper';
  className ||= 'image';

  return (
    <div className={wrapper}>
      <img
        className={className}
        alt={imageUrl}
        key={imageUrl}
        src={imageUrl}
        {...props}
      />
    </div>
  )
}

export default Image