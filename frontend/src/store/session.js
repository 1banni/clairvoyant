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
  const res = await csrfFetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ credential,password })
  });


  if (res.ok) {
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
  }
  return res;
};

export const logout = () => async dispatch => {
  const res = await csrfFetch(`/api/session`, { method: "DELETE" });
  if (res.ok) {
    storeCurrentUser(null);
    dispatch(removeCurrentUser());
    return res;
  } else {
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
      return { ...state, user: action.payload };
    case REMOVE_CURRENT_USER:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default sessionReducer;

