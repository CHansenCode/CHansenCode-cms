import { GET_META } from 'actions';

const meta = (meta = initialProps, action) => {
  switch (action.type) {
    case GET_META:
      return action.payload;
    default:
      return meta;
  }
};

const initialProps = [];

export default meta;
