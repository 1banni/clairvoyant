import { receiveBookmark, RECEIVE_BOOKMARK, REMOVE_BOOKMARK } from './bookmarks';
import csrfFetch from './csrf';

// ACTION CONSTANTS
const RECEIVE_ARTICLES = 'articles/RECEIVE_ARTICLES';
const RECEIVE_ARTICLE = 'articles/RECEIVE_ARTICLE';
const DELETE_ARTICLE = 'articles/DELETE_ARTICLE';

// ACTION CREATORS
export const receiveArticles = articles => {
  return {
    type: RECEIVE_ARTICLES,
    articles
  }
};

export const receiveArticle = article => {
  return {
    type: RECEIVE_ARTICLE,
    article
  }
};


// THUNK ACTION CREATORS
export const fetchArticles = () => async dispatch => {
  const res = await csrfFetch('/api/articles/');
  // const res = filter_params
  //   ? await csrfFetch('/api/articles', {body: JSON.stringify(filter_params)})
  //   : await csrfFetch('/api/articles')

  if (res.ok) {
    const articles = await res.json();
    dispatch(receiveArticles(articles));
  }
}

export const fetchArticle = (articleId) => async dispatch => {
  const res = await csrfFetch(`/api/articles/${articleId}`);

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveArticle(article));
  }
}

export const createArticle = (articleData) => async dispatch => {
  const res = await csrfFetch('/api/articles/', {
    method: "POST",
    body: JSON.stringify(articleData)
  });

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveArticle(article));
  }
}

// export const createBookmark = (bookmarkData) => async dispatch => {
//   const res = await csrfFetch('/api/bookmarks', {
//     method: "POST",
//     body: JSON.stringify(bookmarkData)
//   });

//   if (res.ok) {
//     const bookmark = await res.json();
//     dispatch(receiveBookmark(bookmark));
//   }
// }




const articlesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return { ...action.articles }
    case RECEIVE_ARTICLE:
      // let newState = {...state}
      // newState[action.article.id] = action.article;
      // POTENTIAL BUG - could just be action.article
      return { ...state, ...action.article};
    case DELETE_ARTICLE:
      const newState = {...state};
      delete newState(action.articleId);
      return newState;
    default:
      return state;
  }
}

export default articlesReducer;




