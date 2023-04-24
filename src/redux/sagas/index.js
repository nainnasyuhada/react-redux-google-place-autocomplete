import { all } from 'redux-saga/effects'
import placeSaga from './placeSaga'

export default function* rootSaga() {
  yield all([
    placeSaga(),
  ])
}