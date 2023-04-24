import { combineReducers } from 'redux';
import places from './places';
import users from './places';

const rootReducer = combineReducers({
  places: places,
});

export default rootReducer;