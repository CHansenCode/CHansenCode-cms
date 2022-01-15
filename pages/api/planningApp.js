import axios from 'axios';

import { baseURL } from 'config';
const url = `${baseURL}/planning`;

import * as api from './api';

import { uniqueIdGenerator } from 'lib';

import {
  GET_PLANS,
  GET_PLAN,
  CREATE_PLAN,
  UPDATE_PLAN,
  DELETE_PLAN,
} from 'actions';

export const getPlans = () => async dispatch => {
  try {
    const { data } = await api.getMe(url);

    dispatch({ type: GET_PLANS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getPlan = id => async dispatch => {
  try {
    const { data } = await api.getMe(`${url}/${id}`);

    dispatch({ type: GET_PLAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPlan = () => async dispatch => {
  const formData = {
    title: '',
    stages: [
      {
        id: uniqueIdGenerator(),
        tasks: [
          {
            id: uniqueIdGenerator(),
            subtasks: [
              {
                id: uniqueIdGenerator(),
              },
            ],
          },
        ],
      },
    ],
  };

  try {
    let { data } = await axios.post(url, formData);

    dispatch({ type: CREATE_PLAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePlan = formData => async dispatch => {
  try {
    let { data } = await axios.patch(`${url}/${formData._id}`, formData);

    dispatch({ type: UPDATE_PLAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePlan = id => async dispatch => {
  try {
    await api.deleteMe(url, id);

    dispatch({ type: DELETE_PLAN, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
