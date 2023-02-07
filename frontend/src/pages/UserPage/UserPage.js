import './UserPage.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../store/users';
import Image from '../../blocks/Image/Image';

const UserPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const user = useSelector(state => Object.values(state.users))

  console.log('userId');
  console.log(userId);

  useEffect(() => {
    if (userId) dispatch(fetchUser(userId));
  }, [dispatch, userId])


  // console.log('sessionUser');
  // console.log(sessionUser);


  console.log('user');
  console.log(user);

  return (
    <div>UserPage
      {user && user.photoUrl &&
      <Image url={user.photoUrl} /*width='750' height='600'*/ alt={user.photoUrl}/>}
    </div>
  );
};


export default UserPage;