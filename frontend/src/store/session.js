import csrfFetch from './csrf';

// ACTIONS
const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

// ACTION CREATORS
const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user
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
  console.log('logging in user');
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential,password })
  });

  console.log('res');
  console.log(res);


  if (res.ok) {
    const data = await res.json();
    console.log('data');
    console.log(data);
    storeCurrentUser(data.user);
    console.log('data.user');
    console.log(data.user);
    dispatch(setCurrentUser(data.user));
  }
  return res;
};

export const logout = () => async dispatch => {
  console.log('logging out user');
  const res = await csrfFetch(`/api/session`, { method: 'DELETE' });
  if (res.ok) {
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
  } else {
    return 'Something went wrong in session#logout csrfFetch'
  }
}

export const restoreSession = () => async dispatch => {
  console.log('restoring session');
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}

export const signup = (formData) => async dispatch => {
  console.log('signing up user');
  const response = await csrfFetch('/api/users', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();
  storeCurrentUser(data.user);
  dispatch(setCurrentUser(data.user));
  return response;
}


// Selector
export const selectSessionUser = store => {
  if (store.session.user) {
    return Object.values(store.session.user)
  } else {
    return null;
  }
}



const initialState = {
  user: JSON.parse(sessionStorage.getItem('currentUser'))
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.user };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;

