import axios from 'axios';

import { uniqueIdGenerator } from 'lib';
import { baseURL } from 'config';
const url = `${baseURL}/planning`;
import * as api from './api';

import { GET_PLANS, CREATE_PLAN, UPDATE_PLAN, DELETE_PLAN } from 'actions';

export const getPlans = token => async dispatch => {
  try {
    const { data } = await api.getMe(url, token);

    dispatch({ type: GET_PLANS, payload: data });
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

    console.log(data);
    dispatch({ type: CREATE_PLAN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePlan = formData => async dispatch => {
  try {
    let { data } = await axios.patch(`${url}/${formData._id}`, formData);
    console.log('patchCall', data);
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
