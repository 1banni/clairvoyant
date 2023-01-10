import React from 'react';
import './ArticleImage.css';

const ArticleImage = ({className, alt, ...props}) => {
  className ||= "image";
  alt ||= "new-image";


  return (
    <div className={className}>
      <img
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default ArticleImage;