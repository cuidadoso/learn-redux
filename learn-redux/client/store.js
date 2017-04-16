/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
// import the root reducer
import rootReducer from './reducers';

import { comments, posts } from './data';

// create object for default data
const defaultState = {
  comments,
  posts
};
// To use plugin ReduxDevTools in browser(Chrome)
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ?
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);
// TODO integration hot reloading with WebStorm.
if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer);
  });
}

export default store;
