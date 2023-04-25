import { put, takeEvery } from 'redux-saga/effects'
import {GET_GEOCODE_REQUESTED } from '../types';

const baseURL = process.env.REACT_APP_GOOGLE_API_GEOCODE;

function* fetchGeocode(data) {
   try {
      let geocodes = yield fetch(baseURL + '?key=' + process.env.REACT_APP_GOOGLE_API_KEY + '&address=' + data.place);
      yield put({type: 'GET_GEOCODE_SUCCESS', geocodes: geocodes});
   } catch (e) {
      yield put({type: 'GET_GEOCODE_FAILED', message: e.message});
   }
}


function* geocodeSaga() {
   yield takeEvery(GET_GEOCODE_REQUESTED, fetchGeocode);
}

export default geocodeSaga;