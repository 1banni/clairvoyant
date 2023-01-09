import { MdBookOnline } from 'react-icons/md';
import csrfFetch from './csrf';

// ACTION CONSTANTS
export const RECEIVE_BOOKMARK = 'bookmarks/RECEIVE_BOOKMARK'
export const RECEIVE_BOOKMARKS = 'bookmarks/RECEIVE_BOOKMARKS'
export const DELETE_BOOKMARK = 'bookmarks/REMOVE_BOOKMARK'

// ACTION CREATORS
export const receiveBookmarks = bookmarks => ({
  type: RECEIVE_BOOKMARKS,
  bookmarks
})

export const receiveBookmark = article => ({
  type: RECEIVE_BOOKMARK,
  article
})

export const removeBookmark = article => ({
  type: DELETE_BOOKMARK,
  article
})


// THUNK ACTION CREATORS
// TODO: Consider building these differently
export const fetchBookmarks = () => async dispatch => {
  const res = await csrfFetch('/api/bookmarks');

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

export const createBookmark = (bookmarkData) => async dispatch => {
  const res = await csrfFetch('/api/bookmarks', {
    method: "POST",
    body: JSON.stringify(bookmarkData)
  });

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveBookmark(article));
  }
}

export const deleteBookmark = (data) => async dispatch => {
  const res = await csrfFetch(`/api/bookmarks/1`, {
    method: "DELETE",
    body: JSON.stringify(data)
  });

  if (res.ok) {
    const article = await res.json();
    dispatch(removeBookmark(article));
  }
}


// const initialState = {
//   bookmarks: JSON.parse(sessionStorage.getItem('bookmarks'))
// };

const bookmarksReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKMARKS:
      return { ...action.bookmarks };
    // case RECEIVE_BOOKMARK:
    //   return { ...action.bookmark };
    // case REMOVE_BOOKMARK:
    //   const { [action.bookmarkId]: _remove, ...newState } = state;
    //   return newState;
    default:
      return state;
  }
}


export default bookmarksReducer;