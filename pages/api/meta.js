import { baseURL } from 'config';

const url = `${baseURL}/meta`;
import { GET_META } from 'actions';
import * as api from './api';

export const getMeta = token => async dispatch => {
  try {
    const { data } = await api.getMe(url, token);

    dispatch({ type: GET_META, payload: data[0] });
  } catch (error) {
    console.log(error);
  }
};
