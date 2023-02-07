import './Image.css';
import React from 'react'
import { PNG } from '../../assets';


const Image = ({url, alt, wrapper, ...props}) => {
  const imageUrl = url;
  wrapper ||= 'image-wrapper';
  alt ||= 'alt';
  // const imageUrl = PNG.LINKEDIN;

  // props.height ||= '134';
  // props.width ||= '200';


  return (
    <div className={wrapper}>

      <img
        className='image'
        alt={imageUrl}
        key={imageUrl}
        src={imageUrl}
        {...props}
      />

    </div>
  )
}

export default Image