import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import articles from './articles';
// TODO: AXE BELOW LINES IF UNUSED
import comments from './comments';
import bookmarks from './bookmarks';
import claps from './claps';

const rootReducer = combineReducers({
  session,
  articles,
  comments,
  bookmarks,
  claps,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
}
export default configureStore;
