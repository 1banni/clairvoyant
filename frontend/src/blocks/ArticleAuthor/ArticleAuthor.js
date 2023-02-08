import React, { useEffect } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../store/users';
import ColorUtil from '../../utils/ColorUtil';
import Image from '../Image/Image';
import './ArticleAuthor.css';

const ArticleAuthor = ({userId, name, children, imageId, ...props}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.all[userId]);

  const styleOptions = {
    stroke: ColorUtil.nameToColor(name),
    fill: 'white',
    strokeWidth: '50'
  }

  console.log('user');
  console.log(user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])


  return (
    <div className='user-name-icon-ctnr'>
      <div className='user-icon-ctnr'>
      {user && user.photoUrl
      ? <Image url={user.photoUrl} alt={user.photoUrl}
          className='image icon'
          wrapper='image-wrapper icon'
        />
      : <FaUserCircle
          style={styleOptions}
      />}
      {/* <FaUserCircle className='user-icon'
        style={styleOptions}
      /> */}
      </div>
      <div className='user-name'>{name || user.name}</div>
      {children}
    </div>
  )
}

export default ArticleAuthor;

