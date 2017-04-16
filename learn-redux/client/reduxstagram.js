// external dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// redux store dependencies
import { Provider } from 'react-redux';
import store, { history } from './store';
// css styles
import css from './styles/style.styl';
// components
import { App, Single, PhotoGrid } from './components';
// error tracking
import Raven from 'raven-js';
import { sentryUrl, logException } from './data/config';

Raven.config(sentryUrl, {
  tags: {
    git_commit: '1111222334',
    userLevel: 'editor_23'
  }
}).install();

Raven.captureMessage('Something bad happened');
Raven.showReportDialog();

/* logException(new Error('download failed!'), {
  email: 'alexander_s@front.ru'
});

console.log(store.doesNot.nope());*/

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}/>
        <Route path='/view/:postId' component={Single}/>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
