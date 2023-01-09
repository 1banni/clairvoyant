import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import nameToColor from '../../../utils/ColorUtil';
import './Author.css';

const Author = ({name, imageId, ...props}) => {
  const color = nameToColor(name);
  const styleOptions = {
    stroke: color,
    fill: "white",
    strokeWidth: "75"
  }

  return (
    <div className="article-author">
      <div className="user-icon-container">
        <FaUserCircle
          style={styleOptions}
          className="user-icon"
        />
      </div>
      <div className="author-name">{name}</div>
    </div>
  )
}

export default Author;

