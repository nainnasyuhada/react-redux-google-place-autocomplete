import * as type from '../types';

const initialState = {
  geocodes: {},
  loading: false,
  error: null,
}

export default function geocodes(state = initialState, action) {
    switch (action.type) {
      case type.GET_GEOCODE_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_GEOCODE_SUCCESS:
      return {
        ...state,
        loading: false,
        geocodes: action.geocodes
      }
    case type.GET_GEOCODE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
    }
  }
