import csrfFetch from './csrf';
import { RECEIVE_ARTICLE } from './articles';

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
    type: REMOVE_COMMENT,
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

export const fetchComments = (articleId) => async dispatch => {
  const res = await csrfFetch(`/api/comments/${articleId}`);
  if (res.ok) {
    const comments = await res.json();
    dispatch(receiveComment(comments));
  }
};

export const createComment = (comment) => async dispatch => {
  const res = await csrfFetch('/api/comments/', {
    method: 'POST',
    body: JSON.stringify(comment)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveComment(data));
  }
};

export const deleteComment = (commentId) => async dispatch => {
  // const commentId = commentId;

  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(removeComment(commentId));
  }
};

export const updateComment = comment => async dispatch => {
  const res = await csrfFetch(`/api/comments/${comment.id}`, {
    method: 'PATCH',
    body: JSON.stringify(comment)
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveComment(data))
  }
}

// SELECTORS
export const selectCommentsByArticleId = articleId => state => {
  if (!articleId) return 0;
  let comments = Object.values(state.comments);
  if (!comments) return 0;
  if (comments[0] === null) return 0;
  return comments.filter(comment => comment['articleId'] === articleId);
};



// STORE
const initialState = {
  comments: JSON.parse(sessionStorage.getItem('comments'))
};


const commentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ARTICLE:
      return { ...state, ...action.comment };
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