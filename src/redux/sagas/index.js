import { all } from 'redux-saga/effects'
import placeSaga from './placeSaga'
import geocodeSaga from './geocodeSaga'

export default function* rootSaga() {
  yield all([
    placeSaga(),
    geocodeSaga()
  ])
}