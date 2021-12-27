import axios from 'axios';

import { baseURL } from 'config';
const url = `${baseURL}/intercom`;
import * as api from './api';

import {
  GET_CHATS,
  CREATE_CHAT,
  POST_TO_CHAT,
  DELETE_CHAT,
  DELETE_POST,
  EDIT_POST,
} from 'actions';

export const getMyChats = username => async dispatch => {
  const config = {
    headers: { username: 'cadmin' },
  };

  try {
    const { data } = await api.postMe(url, config);

    console.log('getMy', data);
    dispatch({ type: GET_CHATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postToChat = (formData, id) => async dispatch => {
  const config = {
    headers: { username: 'cadmin' },
    body: { data: formData },
  };

  try {
    const { data } = await api.postMe(`${url}/${id}`, config);

    dispatch({ type: POST_TO_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
