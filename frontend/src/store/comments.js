import csrfFetch from './csrf';

// ACTION CONSTANTS
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

// ACTION CREATORS
export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

export const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
};

export const removeComment = commentId => {
  return {
    type: RECEIVE_COMMENT,
    commentId
  };
};

// THUNK ACTION CREATORS
export const fetchComment = () => async dispatch => {
  const res = await csrfFetch('/api/comment');

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
}

export const fetchComments = () => async dispatch => {
  const res = await csrfFetch('/api/comments');

  if (res.ok) {
    const comments = await res.json();
    dispatch(receiveComment(comments));
  }
};

export const createComment = (comment) => async dispatch => {
  const res = await csrfFetch('/api/comments/', {
    method: "POST",
    body: JSON.stringify(comment)
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

export const deleteComment = (comment) => async dispatch => {
  const commentId = comment.id;

  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeComment(commentId));
  }
};

// SELECTORS




// STORE
const initialState = {
  comments: JSON.parse(sessionStorage.getItem('comments'))
};


const commentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_COMMENT:
      return { ...state, ...action.comment };
    case RECEIVE_COMMENTS:
      return { ...action.comments };
    case REMOVE_COMMENT:
      let newState = { ...state };
      delete newState[action.commentId];
      return newState;
    default:
      return state;
  }
};


export default commentsReducer;