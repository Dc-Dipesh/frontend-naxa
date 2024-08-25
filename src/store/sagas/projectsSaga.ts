import { call, put, takeEvery } from 'redux-saga/effects';


import { fetchProjects } from '../../api/projectApi';
import { fetchProjectsFailure, fetchProjectsStart, fetchProjectsSuccess } from '../slices/projectSlice';
// eslint-disable-next-line
function* fetchProjectsSaga(): Generator<any, void, any> {
  try {
    yield put(fetchProjectsStart());
    const projects = yield call(fetchProjects);
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsFailure(error));
  }
}

export function* watchFetchProjects() {
  yield takeEvery('projects/fetchProjectsRequest', fetchProjectsSaga);
}