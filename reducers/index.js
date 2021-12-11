import { combineReducers } from 'redux';

//base9
import users from './users';
import media from './media';
import texts from './texts';
import meta from './meta';
import tickets from './tickets';
import planning from './planningApp';
import presentation from './presentation';
import errorHandler from './errorHandler';

export const reducers = combineReducers({
  users,
  tickets,
  media,
  meta,
  texts,
  planning,
  presentation,
  errorHandler,
});
