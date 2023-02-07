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
  const res = await csrfFetch(`/api/users/${userId}`);


  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
}



const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      return { ...state,  ...action.user };
    default:
      return state;
  }
}

export default usersReducer;