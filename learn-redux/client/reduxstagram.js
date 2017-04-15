/*eslint linebreak-style:0*/
// external dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
// css styles
import css from './styles/style.styl';
// components
import { Main, Single, PhotoGrid } from './components';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Main}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postId' component={Single}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
