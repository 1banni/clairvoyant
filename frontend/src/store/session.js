import csrfFetch from './csrf';

// ACTIONS
const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

// ACTION CREATORS
const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

// Session storage modifiers
const storeCSRFToken = response => {
  const csrfToken = response.headers.get('X-CSRF-Token');
  if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
}

const storeCurrentUser = user => {
  if (user) sessionStorage.setItem('currentUser', JSON.stringify(user));
  else sessionStorage.removeItem('currentUser');
}


// THUNK ACTION CREATORS
export const login = ({ credential, password }) => async dispatch => {
  // console.count('in session#login');
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential,password })
  });

  // console.log(res);

  if (res.ok) {
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return res;
  } else {
    // console.log(res.errors)
    return res;
  }
};

export const logout = () => async dispatch => {
  console.count('in logout');
  const res = await csrfFetch(`/api/session`, { method: "DELETE" });
  console.log('res');
  console.log(res);
  console.log(res.ok);
  if (res.ok) {
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
  } else {
    console.log('Something went wrong in session#logout csrfFetch');
    return 'Something went wrong in session#logout csrfFetch'
  }
}

export const restoreSession = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}

export const signup = ({ username, email, password }) => async dispatch => {
  console.count('in session@signup');
  const response = await csrfFetch('/api/users', {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password
    })
  });

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}

const initialState = {
  user: JSON.parse(sessionStorage.getItem('currentUser'))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      // debugger;
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;


// import csrfFetch from './csrf'

// // ACTION CONSTANTS
// const RECEIVE_USER = 'session/RECEIVE_USER';
// const REMOVE_USER = 'session/REMOVE_USER';

// // ACTION CREATORS
// export const receiveUser = (user) => ({
//   type: RECEIVE_USER,
//   payload: user
// })

// export const removeUser = () => ({
//   type: REMOVE_USER
// })

// // THUNK ACTIONS
// export const loginUser = user => async dispatch => {
//   const { username, password } = user;

//   let res = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({
//       username,
//       password
//     })
//   });
//   let data = await res.json();
//   dispatch(receiveUser(data.user));
//   return data;
// }


// const initialState = { user: null };

// // REDUCER
// const sessionReducer = (state=initialState, action) => {
//   switch (action.type) {
//     case RECEIVE_USER:
//       return { ...state, user: action.payload };
//     case REMOVE_USER:
//       return { ...state, user: null };
//     default:
//       return state;
//   }
// };
// export default sessionReducer;
