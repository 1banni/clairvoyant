import './UserPage.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser, fetchUsers } from '../../store/users';
import Image from '../../blocks/Image/Image';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(store => store.users.all[userId]);


  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  return (
    <div className='user-page'>
      {user && user.photoUrl &&
      <Image url={user.photoUrl} /*width='750' height='600'*/ alt={user.photoUrl}/>}
    </div>
  );
};


export default UserPage;