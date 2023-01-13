import csrfFetch from './csrf';

// ACTION CONSTANTS
export const RECEIVE_CLAP = 'claps/RECEIVE_CLAP'
export const RECEIVE_CLAPS = 'claps/RECEIVE_CLAPS'
export const REMOVE_CLAP = 'claps/REMOVE_CLAP'

// ACTION CREATORS
export const receiveClap = clap => {
  return {
    type: RECEIVE_CLAP,
    clap
  };
};

export const receiveClaps = claps => {
  return {
    type: RECEIVE_CLAPS,
    claps
  };
};

export const removeClap = clapId => {
  return {
    type: REMOVE_CLAP,
    clapId
  };
};

// THUNK ACTION CREATORS
// TODO: Consider building these differently
export const fetchClap = (clapId) => async dispatch => {
  const res = await csrfFetch(`/api/claps/${clapId}`);

  if (res.ok) {
    const clap = await res.json();
    dispatch(receiveClap(clap));
  }
};

export const fetchClaps = () => async dispatch => {
  const res = await csrfFetch('/api/claps');

  if (res.ok) {
    const claps = await res.json();
    dispatch(receiveClaps(claps));
  }
};

// Question: where does re-render happen in this process / am i triggering it efficiently
export const createClap = (clap) => async dispatch => {
  const res = await csrfFetch('/api/claps/', {
    method: "POST",
    body: JSON.stringify(clap)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveClap(data));
  }
};

export const deleteClap = (clapId) => async dispatch => {
  const res = await csrfFetch(`/api/claps/${clapId}`, {
      method: "DELETE"
  });

  if (res.ok) dispatch(removeClap(clapId));
};

// SELECTORS
export const selectClapsByArticleId = articleId => state => {
  if (!articleId) return 0;

  let claps = Object.values(state.claps)

  if (claps) {
    let articleClaps = claps.filter(clap => clap['articleId'] === articleId);
    return articleClaps;
  } else {
    return 0;
  }
};

export const selectClapId = (articleId, userId) => state => {
  let clapId;

  Object.values(state.claps).forEach(clap => {
    if (clap.userId === userId && clap.articleId === articleId) {
      clapId = clap.id;
    }
  });

  return clapId;
};


// const initialState = {
//   claps: JSON.parse(sessionStorage.getItem('claps'))
// };

const clapsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CLAPS:
      return { ...action.claps };
    case RECEIVE_CLAP:
      return { ...state, ...action.clap };
    case REMOVE_CLAP:
      let newState = { ...state };
      delete newState[action.clapId];
      return newState;
    default:
      return state;
  }
};


export default clapsReducer;