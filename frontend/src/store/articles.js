import csrfFetch from './csrf';

// ACTION CONSTANTS
const RECEIVE_ARTICLES = 'articles/RECEIVE_ARTICLES';
const RECEIVE_ARTICLE = 'articles/RECEIVE_ARTICLE';

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
    // TODO: DELETE ME
    // headers: {
    //   "Content-Type":"application/json"
    // },
    body: JSON.stringify(articleData)
  });

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveArticle(article));
  }
}




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
    default:
      return state
  }
}

export default articlesReducer;




