import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import authReducer from './reducers/authReducer';

const store = createStore(authReducer, {}, applyMiddleware(reduxThunk));

if (window.location.hash === '#_=_') {
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href.split('#')[0]);
  } else {
    window.location.hash = '';
  }
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
