import { combineReducers } from 'redux';
import search from '../modules/Search';
import results from '../modules/SearchResults';
import network from '../modules/Network';

const rootReducer = combineReducers({
  search,
  results,
  network,
});

export default rootReducer;
