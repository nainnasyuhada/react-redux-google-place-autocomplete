import * as type from '../types';

export function getGeocodes(place) {
  return { 
    type: type.GET_GEOCODE_REQUESTED,
    place,
  }
};
