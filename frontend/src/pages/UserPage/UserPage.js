import './UserPage.css';
import React from 'react';
import { useSelector } from 'react-redux';

const UserPage = () => {
  const sessionUser = useSelector(state => state.session.user);

  console.log('sessionUser');
  console.log(sessionUser);

  return (
    <div>UserPage</div>
  );
};


export default UserPage;