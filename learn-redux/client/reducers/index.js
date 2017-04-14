/**
 * Created by apyreev on 14-Apr-17.
 */
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import comments from './comment';
import posts from './posts';

const rootReducer  = combineReducers({
  comments,
  posts,
  router
});

export default rootReducer;
