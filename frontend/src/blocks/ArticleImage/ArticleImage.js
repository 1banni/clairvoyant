import React from 'react';
import './ArticleImage.css';

const ArticleImage = ({className, containername, alt, ...props}) => {
  containername ||= 'image-ctnr';
  className ||= 'image';
  alt ||= 'new-image';


  return (
    <div className={containername}>
      <img
        className={className}
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ArticleImage;