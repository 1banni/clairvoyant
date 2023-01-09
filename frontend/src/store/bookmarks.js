import { MdBookOnline } from 'react-icons/md';
import csrfFetch from './csrf';

// ACTION CONSTANTS
export const RECEIVE_BOOKMARK = 'bookmarks/RECEIVE_BOOKMARK'
export const RECEIVE_BOOKMARKS = 'bookmarks/RECEIVE_BOOKMARKS'
export const REMOVE_BOOKMARK = 'bookmarks/REMOVE_BOOKMARK'

// ACTION CREATORS
export const receiveBookmarks = bookmarks => {
  return {
    type: RECEIVE_BOOKMARKS,
    bookmarks
  }
}

export const receiveBookmark = bookmark => {
  console.log('bookmark');
  console.log(bookmark);
  return {
    type: RECEIVE_BOOKMARK,
    bookmark
  }
}

export const removeBookmark = articleId => {
  return {
    type: REMOVE_BOOKMARK,
    articleId
  }
}

// THUNK ACTION CREATORS
// TODO: Consider building these differently
export const fetchBookmarks = () => async dispatch => {
  const res = await csrfFetch('/api/bookmarks');
  console.log('res');
  console.log(res);

  if (res.ok) {
    const bookmarks = await res.json();
    dispatch(receiveBookmarks(bookmarks));
  }
}

export const fetchBookmark = (bookmarkId) => async dispatch => {
  const res = await csrfFetch(`/api/bookmarks/${bookmarkId}`);

  if (res.ok) {
    const bookmark = await res.json();
    dispatch(receiveBookmark(bookmark));
  }
}

// Question: where does re-render happen in this process / am i triggering it efficiently
export const createBookmark = (bookmark) => async dispatch => {
  const res = await csrfFetch('/api/bookmarks/', {
    method: "POST",
    body: JSON.stringify(bookmark)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveBookmark(data));
  }
}

export const deleteBookmark = (bookmark) => async dispatch => {
  let articleId = bookmark.articleId;
  const res = await csrfFetch(`/api/bookmarks/${bookmark.id}`, {
      method: "DELETE"
  });

  if (res.ok) {
    dispatch(removeBookmark(articleId));
  }
}


const initialState = {
  bookmarks: JSON.parse(sessionStorage.getItem('bookmarks'))
};

const bookmarksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_BOOKMARKS:
      return { ...action.bookmarks };
    case RECEIVE_BOOKMARK:
      return { ...state, ...action.bookmark };
    case REMOVE_BOOKMARK:
      let newState = { ...state }
      delete newState[action.articleId]
      return newState;
    default:
      return state;
  }
}


export default bookmarksReducer;