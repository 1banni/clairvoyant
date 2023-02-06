import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import ColorUtil from '../../utils/ColorUtil';
import './ArticleAuthor.css';

const ArticleAuthor = ({name, children, imageId, ...props}) => {
  const styleOptions = {
    stroke: ColorUtil.nameToColor(name),
    fill: 'white',
    strokeWidth: '50'
  }

  return (
    <div className='user-name-icon-ctnr'>
      <div className='user-icon-ctnr'>
        <FaUserCircle className='user-icon'
          style={styleOptions}
        />
      </div>
      <div className='user-name'>{name}</div>
      {children}
    </div>
  )
}

export default ArticleAuthor;

