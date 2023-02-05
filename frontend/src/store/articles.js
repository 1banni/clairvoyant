import { receiveComments } from './comments';
import csrfFetch from './csrf';

// ACTION CONSTANTS
export const RECEIVE_ARTICLES = 'articles/RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'articles/RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'articles/REMOVE_ARTICLE';

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

export const removeArticle = articleId => {
  return {
    type: REMOVE_ARTICLE,
    articleId
  }
}


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
    const {article, comments} = await res.json();
    // This payload will go to every reducer
    // receiveComment - polug it into state
    // filter in useSelector for comment
    dispatch(receiveArticle(article));
    dispatch(receiveComments(comments));
  }
};

export const createArticle = (formData) => async dispatch => {
  const res = await csrfFetch('/api/articles/', {
    method: "POST",
    body: formData
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveArticle(data));
    return Object.keys(data.article)[0];
  }
};

export const deleteArticle = articleId => async dispatch => {
  const res = await csrfFetch(`/api/articles/${articleId}`, {
    method: "DELETE"
  });

  if (res.ok) dispatch(removeArticle(articleId));
}

export const updateArticle = (formData, articleId) => async dispatch => {

  const res = await csrfFetch(`/api/articles/${articleId}`, {
    method: "PATCH",
    body: formData
  })

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveArticle(data));
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

// SELECTORS
export const selectArticle = articleId => store => {
  return store?.articles ? store.articles[articleId] : null;
}

export const selectTopics = () => store => {
  const articles = Object.values(store.articles);
  const topics = [];

  articles.forEach(article => {
    if (!topics.includes(article.topic)) {
      topics.push(article.topic);
    }
  });

  return topics;
}

export const selectTrendingArticles = len => store => {
  const articles = Object.values(store.articles);
  return articles.sort((a, b) => a.numClaps > b.numClaps ? 1 : -1).slice(0,len);
};





// REDUCER
// const initialState = {
//   articles: JSON.parse(sessionStorage.getItem('articles'))
// };

const articlesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return { ...action.articles }
    case RECEIVE_ARTICLE:
      // let newState = {...state}
      // newState[action.article.id] = action.article;
      // POTENTIAL BUG - could just be action.article
      return { ...action.article};
    case REMOVE_ARTICLE:
      let newState = {...state};
      delete newState[action.articleId];
      return newState;
    default:
      return state;
  }
}

export default articlesReducer;




