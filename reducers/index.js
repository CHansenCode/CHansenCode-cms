import { combineReducers } from 'redux';

//base9
import users from './users';
import media from './media';
import texts from './texts';
import meta from './meta';
import planning from './planningApp';
import presentation from './presentation';
import errorHandler from './errorHandler';

export const reducers = combineReducers({
  users,
  media,
  meta,
  texts,
  planning,
  presentation,
  errorHandler,
});
