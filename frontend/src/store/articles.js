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
  const res = await csrfFetch('/api/articles');

  if (res.ok) {
    const articles = await res.json();
    dispatch(receiveArticles(articles));
  } else {
    console.log("errorrrrrr in fetchArticles thunk action creator")
  }
}

export const fetchArticle = (articleId) => async dispatch => {
  const res = await csrfFetch(`/api/articles/${articleId}`);

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveArticle(article));
  } else {
    console.log("errorrrrrr in fetchArticles thunk action creator")
  }
}

export const createArticle = (articleData) => async dispatch => {
  console.log('creating article')
  const res = await csrfFetch('/api/articles/', {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(articleData)
  });

  if (res.ok) {
    const article = await res.json();
    dispatch(receiveArticle(article));
  } else {
    console.log("errorrrrrr in fetchArticles thunk action creator")
  }
}




const articlesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ARTICLES:
      return { ...action.articles }
    case RECEIVE_ARTICLE:
      console.log(action)
      // let newState = {...state}
      // newState[action.article.id] = action.article;
      // POTENTIAL BUG - could just be action.article
      return { ...state, ...action.article};
    default:
      return state
  }
}

export default articlesReducer;




