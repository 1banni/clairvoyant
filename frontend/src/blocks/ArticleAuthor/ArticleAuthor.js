import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import ColorUtil from '../../utils/ColorUtil';
import './ArticleAuthor.css';

const ArticleAuthor = ({name, imageId, ...props}) => {
  const styleOptions = {
    stroke: ColorUtil.nameToColor(name),
    fill: "white",
    strokeWidth: "75"
  }

  return (
    <div className="article-author">
      <div className="user-icon-container">
        <FaUserCircle className="user-icon"
          style={styleOptions}
        />
      </div>
      <div className="author-name">{name}</div>
    </div>
  )
}

export default ArticleAuthor;
