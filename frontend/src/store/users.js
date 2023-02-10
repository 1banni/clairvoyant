import csrfFetch from './csrf';


// ACTION CONSTANTS
export const RECEIVE_USER = 'users/RECEIVE_USER';
export const RECEIVE_USERS = 'users/RECEIVE_USERS';


// ACTIONS
export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user
  };
};

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};


// THUNK ACTION CREATORS
export const fetchUser = (userId) => async dispatch => {
  const res = await csrfFetch(`/api/users/${userId}`);

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
}

export const fetchUsers = () => async dispatch => {
  const res = await csrfFetch('/api/users/');

  if (res.ok) {
    const users = await res.json();
    dispatch(receiveUsers(users));
  }
}


// SELECTORS
export const selectUser = userId => store => {
  return store.users?.all ? store.users.all[userId] : null;
}


const usersReducer = (state = {all: {}, one: {}}, action) => {
  Object.freeze(state);
  const newState = {...state}
  switch (action.type) {
    case RECEIVE_USER:
      // return { ...state,  ...action.user };
      // newState.one = { ...action.user };
      // newState.all = { ...state.all, ...action.user };
      // return newState;
      return { ...action.user };
    case RECEIVE_USERS:
      // newState.all = { ...state.all, ...action.users };
      // return newState;
      return { ...action.users }
    default:
      return state;
  }
}
// const usersReducer = (state = {all: {}, one: {}}, action) => {
//   Object.freeze(state);
//   const newState = {...state}
//   switch (action.type) {
//     case RECEIVE_USER:
//       // return { ...state,  ...action.user };
//       newState.one = { ...action.user };
//       newState.all = { ...state.all, ...action.user };
//       return newState;
//     case RECEIVE_USERS:
//       newState.all = { ...state.all, ...action.users };
//       return newState;
//     default:
//       return state;
//   }
// }

export default usersReducer;