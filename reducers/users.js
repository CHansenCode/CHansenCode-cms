import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from 'actions';

const users = (users = initialProps, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case GET_USER:
      return users.map(user => user._id === payload._id);
    case CREATE_USER:
      return [...users, action.payload];
    case UPDATE_USER:
      return users.map(user =>
        user._id === action.payload._id ? action.payload : user,
      );
    case DELETE_USER:
      return users.filter(user => user._id === action.payload);
    default:
      return users;
  }
};

const initialProps = [];

export default users;
