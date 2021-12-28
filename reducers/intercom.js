import {
  GET_CHATS,
  CREATE_CHAT,
  POST_TO_CHAT,
  DELETE_CHAT,
  DELETE_POST,
  EDIT_POST,
} from 'actions';

const intercom = (chats = initialProps, action) => {
  switch (action.type) {
    case GET_CHATS:
      return action.payload;
    case CREATE_CHAT:
      return chats;
    case POST_TO_CHAT:
      return chats.map(p =>
        p._id === action.payload._id ? action.payload : p,
      );
    case DELETE_CHAT:
      return chats;
    case DELETE_POST:
      return chats;
    case EDIT_POST:
      return chats;
    default:
      return chats;
  }
};

const initialProps = {
  organizationChats: [],
  individualChats: [],
};

export default intercom;
