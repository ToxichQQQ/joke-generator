import {getNewJoke} from "../../services";
import {ADD_NEW_JOKE, GET_NEW_JOKE} from "../types";
import { takeEvery,put,call } from 'redux-saga/effects'

export function* workerSaga() {
    const data = yield call(getNewJoke)

    yield put({type:ADD_NEW_JOKE,payload:{id:data.id,text:data.value,url:data.icon_url}})
}

export function* watchSaga() {
        yield takeEvery(GET_NEW_JOKE,workerSaga)
}

export function* rootSaga() {
    console.log('RootSaga is ready')
    yield watchSaga()
}