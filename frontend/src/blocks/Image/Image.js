import './Image.css';
import React from 'react'
import { PNG } from '../../assets';


const Image = ({url, alt, wrapper, className, ...props}) => {
  const imageUrl = url;
  wrapper ||= 'image-wrapper';
  className ||= 'image';
  alt ||= 'alt';


  // console.log('url');
  // console.log(url);

  return (
    <div className={wrapper}>
      <img
        className={className}
        alt={imageUrl}
        key={imageUrl}
        src={imageUrl}
        /*{...props}*/
      />
    </div>
  )
}

export default Image