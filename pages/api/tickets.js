import { baseURL } from 'config';
const url = `${baseURL}/tickets`;
import * as api from './api';

import {
  GET_TICKETS,
  CREATE_TICKET,
  UPDATE_TICKET,
  DELETE_TICKET,
} from 'actions';

export const getTickets = token => async dispatch => {
  try {
    const { data } = await api.getMe(url, token);

    dispatch({ type: GET_TICKETS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createTicket = formData => async dispatch => {
  try {
    const { data } = await api.postMe(url, formData);

    dispatch({ type: CREATE_TICKET, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateTicket = (id, formData, token) => async dispatch => {
  try {
    const { data } = await api.patchMe(url, id, formData, token);

    dispatch({ type: UPDATE_TICKET, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteTicket = (id, token) => async dispatch => {
  try {
    const { data } = await api.deleteMe(url, id, token);

    dispatch({ type: DELETE_TICKET, payload: data });
  } catch (error) {
    console.log(error);
  }
};

//FUTURE
export const archiveTicket = (url, id, token) => async dispatch => {
  try {
    const { data } = await api.patchMe(url, id, token);

    dispatch({ type: ARCHIVE_TICKET, payload: data });
  } catch (error) {
    console.log(error);
  }
};
