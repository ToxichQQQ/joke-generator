import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {jokeReducer} from "./reducers/jokeReducer";
import {rootSaga} from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const store = createStore(jokeReducer,applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga)

export default store



