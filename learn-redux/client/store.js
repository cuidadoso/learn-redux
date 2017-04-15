/**
 * Created by apyreev on 14-Apr-17.
 */
// external dependencies
import { createStore, compse } from 'redux';
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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
