import * as type from '../types';

export function getPlaces(keyword) {
  return { 
    type: type.GET_PLACES_REQUESTED,
    keyword,
  }
};
