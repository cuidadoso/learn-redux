// external dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// css styles
import css from './styles/style.styl';
// components
import { Main, Single, PhotoGrid } from './components';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={PhotoGrid}/>
      <Route path='/view/:postId' component={Single}/>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
