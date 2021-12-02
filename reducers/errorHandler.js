import { PRINT_ERROR_IN_MODAL, RESET_ERROR_MODAL } from 'actions';

const errorHandler = (error = initState, action) => {
  switch (action.type) {
    case PRINT_ERROR_IN_MODAL:
      return action.payload;
    case RESET_ERROR_MODAL:
      return '';
    default:
      return error;
  }
};

const initState = '';

export default errorHandler;
