import './Image.css';
import React from 'react'
import { PNG } from '../../assets';


const Image = ({url, alt, wrapper, ...props}) => {
  const imageUrl = url;
  // const imageUrl = PNG.LINKEDIN;

  wrapper ||= 'image-wrapper';
  alt ||= '';
  // props.height ||= '134';
  // props.width ||= '200';


  return (
    <div className={wrapper}>

      <img
        alt={alt}
        key={Math.floor(Math.random() * 10^8)}
        src={imageUrl}
        {...props}
      />

    </div>
  )
}

export default Image