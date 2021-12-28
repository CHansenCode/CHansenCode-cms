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

export const getMyChats = (username, organization) => async dispatch => {
  const config = {
    headers: { username: username },
    username: username,
    organization: organization,
  };

  try {
    const { data } = await api.postMe(url, config);
    dispatch({ type: GET_CHATS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postToChat = (formData, id) => async dispatch => {
  try {
    const { data } = await api.postMe(`${url}/${id}`, { ...formData });
    dispatch({ type: POST_TO_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createUsersChat = user => async dispatch => {
  const config = {
    body: { users: [...userOne, ...userTwo] },
  };

  try {
    const { data } = await api.postMe(`${url}/new`, config);

    dispatch({ type: POST_TO_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createOrganizationChat = organization => async dispatch => {
  try {
    const { data } = await api.postMe(`${url}/new`, config);

    dispatch({ type: POST_TO_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId, chatId) => async dispatch => {
  try {
    const { data } = await api.postMe(`${url}/${chatId}`);

    dispatch({ type: DELETE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const testReducer = () => async dispatch => {
  data = {};
  try {
    dispatch({ type: POST_TO_CHAT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
