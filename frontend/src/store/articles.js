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

export const createArticle = (article) => async dispatch => {
  console.log('article');
  console.log(article);
  const res = await csrfFetch('/api/articles/', {
    method: "POST",
    body: JSON.stringify(article)
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveArticle(data));
    return Object.keys(data[0]);
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
export const selectTopics = () => (state) => {
  const articles = Object.values(state.articles);
  const topics = [];

  articles.forEach(article => {
    if (!topics.includes(article.topic)) {
      topics.push(article.topic);
    }
  });

  return topics;
}

export const selectTrendingArticles = (n) => (state) => {
  const articles = Object.values(state.articles);
  return articles.sort((a, b) => a.numClaps > b.numClaps ? 1 : -1).slice(0,n);
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




