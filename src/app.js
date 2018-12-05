'use strict';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader';
import createStore from './store';
import Routes from './router'
import './app.scss';

const App = () => {
  // this.props.dispatch
  return EASY_ENV_IS_DEV ? <AppContainer><Routes /></AppContainer> : <Routes />;
};

const Entry = () => (<div className="root">
  <Provider store={ createStore() }>
    <App />
  </Provider>
</div>
);

ReactDOM.render(<Entry />, document.getElementById('app'));

if (EASY_ENV_IS_DEV && module.hot) {
  module.hot.accept();
}
