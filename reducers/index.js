import { combineReducers } from 'redux';

// ** BASE
import users from './users';
import media from './media';
import texts from './texts';
import intercom from './intercom';
import meta from './meta';
import tickets from './tickets';
import planning from './planningApp';
import presentation from './presentation';

// ** DOMAIN
import errorHandler from './errorHandler';
import imageModal from './imageModal';

export const reducers = combineReducers({
  planning,
  users,
  tickets,
  media,
  meta,
  texts,
  presentation,
  intercom,

  //
  errorHandler,
  imageModal,
});
