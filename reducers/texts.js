import {
  GET_ALL_TEXTS,
  UPDATE_TEXT,
  DELETE_TEXT,
  NEW_PAGE,
  NEW_PARAGRAPH,
  DELETE_PARAGRAPH,
} from 'actions';

const texts = (texts = initialProps, action) => {
  switch (action.type) {
    case GET_ALL_TEXTS:
      return action.payload;
    case UPDATE_TEXT:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    case NEW_PAGE:
      return [...texts, action.payload];
    case DELETE_TEXT:
      return texts.filter(text => !(text._id === action.payload));
    case NEW_PARAGRAPH:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    case DELETE_PARAGRAPH:
      return texts.map(text =>
        text._id === action.payload._id ? action.payload : text,
      );
    default:
      return texts;
  }
};

const initialProps = [];

export default texts;
