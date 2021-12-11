import axios from 'axios';

import { baseURL } from 'config';
const url = `${baseURL}/presentation`;
import * as api from './api';

import {
  GET_PRESENTATIONS,
  CREATE_PRESENTATION,
  UPDATE_PRESENTATION,
  DELETE_PRESENTATION,
  CREATE_PRESENTATION_SLIDE,
} from 'actions';

export const getPresentations = () => async dispatch => {
  try {
    const { data } = await api.getMe(url);

    dispatch({ type: GET_PRESENTATIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createPresentation = formData => async dispatch => {
  let post = {
    title: formData,
  };

  try {
    let { data } = await api.postMe(url, post);

    dispatch({ type: CREATE_PRESENTATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePresentation = (formData, id) => async dispatch => {
  try {
    let { data } = await axios.patch(`${url}/${id}`, formData);

    dispatch({ type: UPDATE_PRESENTATION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePresentation = (id, token) => async dispatch => {
  try {
    await api.deleteMe(url, id, token);

    dispatch({ type: DELETE_PRESENTATION, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewSlide = id => async dispatch => {
  try {
    let { data } = await axios.patch(`${url}/slide/${id}`);

    dispatch({ type: CREATE_PRESENTATION_SLIDE, payload: data });
  } catch (error) {
    console.log('create new slide', error);
  }
};
