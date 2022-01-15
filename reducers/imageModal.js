import { SET_IMAGE_MODAL, CLEAR_IMAGE_MODAL } from 'actions';

const imageModal = (image = initState, action) => {
  switch (action.type) {
    //
    case SET_IMAGE_MODAL:
      return action.payload;

    case CLEAR_IMAGE_MODAL:
      return initState;

    default:
      return initState;
  }
};

const initState = {};

export default imageModal;
