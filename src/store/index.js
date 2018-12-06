import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { DEFAULT_DATA } from './constant';

export default function () {
  return createStore(reducers, {
    list: DEFAULT_DATA,
    foo: {},
  },
  applyMiddleware(thunk));
}
