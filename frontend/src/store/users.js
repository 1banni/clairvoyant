import csrfFetch from './csrf';

export const RECEIVE_USER = 'users/RECEIVE_USER';
// export const RECEIVE_USERS = 'users/RECEIVE_USERS';

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const fetchUser = (userId) => async dispatch => {
  console.log("inside of fetch user");

  const res = await csrfFetch(`/api/users/${userId}`);


  console.log('res');
  console.log(res);

  if (res.ok) {
    console.log("inside if");
    console.log('user');
    const user = await res.json();
    console.log('user');
    console.log(user);
    dispatch(receiveUser(user));
  }
}



const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      console.log('action');
      console.log(action);
      console.log('action.user');
      console.log(action.user);
      return { ...state,  ...action.user };
    default:
      return state;
  }
}

export default usersReducer;