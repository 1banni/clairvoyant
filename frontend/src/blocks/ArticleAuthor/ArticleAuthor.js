import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import ColorUtil from '../../utils/ColorUtil';
import Image from '../Image/Image';
import './ArticleAuthor.css';

const ArticleAuthor = ({user, name, children, photoURL, imageId, ...props}) => {
  const styleOptions = {
    stroke: ColorUtil.nameToColor(name),
    fill: 'white',
    strokeWidth: '50'
  }

  return (
    <div className='user-name-icon-ctnr'>
      <div className='user-icon-ctnr'>
      {photoURL
      ? <Image url={photoURL} alt={photoURL}
          className='image icon'
          wrapper='image-wrapper icon'
        />
      : <FaUserCircle
          style={styleOptions}
      />}
      </div>

      <div className='user-name'>
        {name || user.name}
      </div>

      {children}
    </div>
  )
}

export default ArticleAuthor;

