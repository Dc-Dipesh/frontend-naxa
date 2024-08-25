import { all } from 'redux-saga/effects';
import { watchFetchProjects } from './projectsSaga';

export default function* rootSaga() {
  yield all([watchFetchProjects()]);
}