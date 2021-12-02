import {
  GET_MEDIA,
  GET_MEDIA_POST,
  CREATE_MEDIA,
  UPDATE_MEDIA,
  DELETE_MEDIA,
} from 'actions';

const media = (media = initialProps, action) => {
  switch (action.type) {
    case GET_MEDIA:
      return action.payload;
    case GET_MEDIA_POST:
      return media.map(post => post._id === payload._id);
    case CREATE_MEDIA:
      return [...media, action.payload];
    case UPDATE_MEDIA:
      return media.map(post =>
        post._id === action.payload._id ? action.payload : post,
      );
    case DELETE_MEDIA:
      return media.filter(post => !(post._id === action.payload));
    default:
      return media;
  }
};

const initialProps = [];

export default media;
