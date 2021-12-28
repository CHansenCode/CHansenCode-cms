import { combineReducers } from 'redux';

//base9
import users from './users';
import media from './media';
import texts from './texts';
import intercom from './intercom';
import meta from './meta';
import tickets from './tickets';
import planning from './planningApp';
import presentation from './presentation';
import errorHandler from './errorHandler';

export const reducers = combineReducers({
  //group
  planning,

  //individual
  users,
  tickets,
  media,
  meta,
  texts,
  presentation,
  errorHandler,
  intercom,
});
