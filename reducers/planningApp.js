import {
  GET_PLANS,
  CREATE_PLAN,
  UPDATE_PLAN,
  DELETE_PLAN,
  RESOLVE_SUBTASK,
} from 'actions';

const planning = (plans = initialProps, action) => {
  switch (action.type) {
    case GET_PLANS:
      return action.payload;
    case CREATE_PLAN:
      return [...plans, action.payload];
    case UPDATE_PLAN:
      return plans.map(plan =>
        plan._id === action.payload._id ? action.payload : plan,
      );
    case DELETE_PLAN:
      return plans.filter(plan => !(plan._id === action.payload));
    case RESOLVE_SUBTASK:
      let { pIndex, sIndex, tIndex, subIndex } = action.payload;
      plans[pIndex].stages[sIndex].tasks[tIndex].subtasks[subIndex].resolved =
        !plans[pIndex].stages[sIndex].tasks[tIndex].subtasks[subIndex].resolved;
      return plans;
    default:
      return plans;
  }
};

const initialProps = [];

export default planning;
