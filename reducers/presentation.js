import {
  GET_PRESENTATIONS,
  CREATE_PRESENTATION,
  UPDATE_PRESENTATION,
  DELETE_PRESENTATION,
  CREATE_PRESENTATION_SLIDE,
} from 'actions';

const presentation = (presentations = initialProps, action) => {
  switch (action.type) {
    case GET_PRESENTATIONS:
      return action.payload;
    case CREATE_PRESENTATION:
      return [...presentations, action.payload];
    case UPDATE_PRESENTATION:
      return presentations.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    case DELETE_PRESENTATION:
      return presentations.filter(text => !(text._id === action.payload));
    case CREATE_PRESENTATION_SLIDE:
      return presentations.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    default:
      return presentations;
  }
};

const initialProps = [];

export default presentation;
