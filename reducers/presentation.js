import {
  GET_PRESENTATIONS,
  CREATE_PRESENTATION,
  UPDATE_PRESENTATION,
  DELETE_PRESENTATION,
  CREATE_PRESENTATION_SLIDE,
} from 'actions';

const texts = (presentations = initialProps, action) => {
  switch (action.type) {
    case GET_PRESENTATIONS:
      return action.payload;
    case CREATE_PRESENTATION:
      return [...texts, action.payload];
    case UPDATE_PRESENTATION:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    case DELETE_PRESENTATION:
      return texts.filter(text => !(text._id === action.payload));
    case CREATE_PRESENTATION_SLIDE:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    default:
      return texts;
  }
};

const initialProps = [];

export default texts;
