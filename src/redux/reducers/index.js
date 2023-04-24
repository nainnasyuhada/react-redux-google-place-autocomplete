import { combineReducers } from 'redux';
import places from './places';
import geocodes from './geocodes';

const rootReducer = combineReducers({
  places: places,
  geocodes:geocodes
});

export default rootReducer;