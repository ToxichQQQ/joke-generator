import { getNewJoke } from "../../api";
import { ADD_NEW_JOKE, GET_NEW_JOKE } from "../types";
import { takeEvery, put, call } from "redux-saga/effects";

export function* workerSaga() {
  const data = yield call(getNewJoke);

  yield put({
    type: ADD_NEW_JOKE,
    payload: { id: data.id + data.created_at, text: data.value },
  });
}

export function* watchSaga() {
  yield takeEvery(GET_NEW_JOKE, workerSaga);
}

export function* rootSaga() {
  yield watchSaga();
}
