import axios from 'axios';

import { baseURL } from 'config';
const url = `${baseURL}/users`;
import * as api from './api';

import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from 'actions';

export const getUsers = () => async dispatch => {
  try {
    const { data } = await api.getMe(url);

    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
