import fetch from 'cross-fetch';
import { ADD, DEL, LIST, REQUEST, REQUEST_STATUS } from './constant';

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

export const request = ({ service, params }) => (dispatch, getState) => {
  const { status } = getState().foo || {};
  if (status === 'FETCHING') {
    console.info('request status is now FETCHING');
    return;
  }
  dispatch({
    type: REQUEST_STATUS,
    data: { data: {}, status: 'FETCHING' },
  });
  return fetch(service, params)
    .then(res => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log(JSON.stringify(res));
      dispatch({
        type: REQUEST_STATUS,
        data: { data: res, status: 'SUCCESS' },
      });
    })
    .catch(err => {
      console.error(err);
      // alert(err);
      dispatch({
        type: REQUEST_STATUS,
        data: { data: err, status: 'FAIL' },
      });
    });
};

export const requestDone = ({ data }) => {
  return {
    type: REQUEST_STATUS,
    data,
  }
};