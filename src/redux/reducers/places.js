import * as type from '../types';

const initialState = {
  places: {},
  loading: false,
  error: null,
}

export default function places(state = initialState, action) {
    switch (action.type) {
      case type.GET_PLACES_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_PLACES_SUCCESS:
      return {
        ...state,
        loading: false,
        places: action.places
      }
    case type.GET_PLACES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
    }
  }
