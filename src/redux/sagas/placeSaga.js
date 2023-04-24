import { put, takeEvery } from 'redux-saga/effects'
import {GET_PLACES_REQUESTED } from '../types';

const baseURL = process.env.REACT_APP_GOOGLE_API_AUTOCOMPLETE;

function* fetchPlaces(data) {
   try {
      let places = yield fetch(baseURL + '?key=' + process.env.REACT_APP_GOOGLE_API_KEY + '&input=' + data.keyword );
      yield put({type: 'GET_USERS_SUCCESS', places: places});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}


function* placeSaga() {
   yield takeEvery(GET_PLACES_REQUESTED, fetchPlaces);
}

export default placeSaga;