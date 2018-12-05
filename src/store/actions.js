import fetch from 'cross-fetch';
import { ADD, DEL, LIST, REQUEST, REQUEST_DONE } from './constant';

export const add = item => dispatch => {
  console.log('item', item);
  return dispatch({
    type: ADD,
    item
  });
};

export const del = id => dispatch => {
  return dispatch({
    type: DEL,
    id
  });
};

export const list = list => dispatch => {
  return dispatch({
    type: LIST,
    list
  });
}

export const request = ({ service, params }) => dispatch => {
  console.info('dispatch.......');
  return fetch(service, params)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log(JSON.stringify(res));
      dispatch({
        type: REQUEST_DONE,
        data: res,
      });
      return res;
    })
    .catch(err => {
      console.error(err);
    });
};

export const requestDone = ({ data }) => {
  return {
    type: REQUEST_DONE,
    data,
  }
};