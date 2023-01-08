import React from 'react';
import './Image.css';

const Image = props => {
  return (
    <div className="article-tile-image">
      <img
        src="https://miro.medium.com/fit/c/400/268/0*CV8SZagj7nhTYtYn"
        alt="new"
        height="134px"
        width="200px"
      />
    </div>
  );
}

export default Image;