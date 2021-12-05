import { baseURL } from 'config';
const url = `${baseURL}/texts`;
import * as api from './api';

import {
  GET_ALL_TEXTS,
  UPDATE_TEXT,
  DELETE_TEXT,
  NEW_PAGE,
  NEW_PARAGRAPH,
} from 'actions';

export const getTexts = token => async dispatch => {
  try {
    const { data } = await api.getMe(url, token);

    dispatch({ type: GET_ALL_TEXTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateText = (id, formData, token) => async dispatch => {
  try {
    const { data } = await api.patchMe(url, id, formData, token);

    dispatch({ type: UPDATE_TEXT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteText = (id, token) => async dispatch => {
  try {
    const { data } = await api.deleteMe(url, id, token);

    dispatch({ type: DELETE_TEXT, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const newPage = (title, token) => async dispatch => {
  const formData = { pageTitle: title };
  try {
    const { data } = await api.postMe(url, formData, token);

    dispatch({ type: NEW_PAGE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const newParagraph = (id, title, token) => async dispatch => {
  const reqBody = {
    title: title,
  };
  try {
    let { data } = await api.patchMe(`${url}/para`, id, reqBody, token);

    dispatch({ type: NEW_PARAGRAPH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteParagraph = (id, formData, token) => async dispatch => {
  try {
    let { data } = await api.patchMe(url, id, formData, token);

    dispatch({ type: NEW_PARAGRAPH, payload: data });
  } catch (error) {
    console.log(error);
  }
};
