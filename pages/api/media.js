import axios from 'axios';

import { baseURL } from 'config';
const url = `${baseURL}/media`;
import * as api from './api';

import {
  GET_MEDIA,
  CREATE_MEDIA,
  GET_MEDIA_POST,
  UPDATE_MEDIA,
  DELETE_MEDIA,
} from 'actions';

export const getMedia = () => async dispatch => {
  try {
    const { data } = await api.getMe(url);

    dispatch({ type: GET_MEDIA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMediaPost = id => async dispatch => {
  try {
    const { data } = await axios.get(`${url}/${id}`);

    dispatch({ type: GET_MEDIA_POST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMedia = (formData, token) => async dispatch => {
  const header = {
    headers: { 'auth-token': token },
  };

  const altText = formData.alt ? formData.alt : formData.title;

  const addData = {
    ...formData,
    url: `https://media.chansen.design/${formData.category}/${formData.project}/${formData.filename}`,
    alt: altText,
  };

  try {
    let { data } = await axios.post(url, addData, header);

    console.log(data);
    dispatch({ type: CREATE_MEDIA, payload: data });
  } catch (error) {
    console.log();
  }
};

export const updateMedia = (formData, id, token) => async dispatch => {
  try {
    let { data } = await axios.patch(`${url}/${id}`, formData, {
      headers: { 'auth-token': token },
    });

    dispatch({ type: UPDATE_MEDIA, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMedia = (id, token) => async dispatch => {
  try {
    await api.deleteMe(url, id, token);

    dispatch({ type: DELETE_MEDIA, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
