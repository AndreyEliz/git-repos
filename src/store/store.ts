import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers/index';
import createSagaMiddleware from 'redux-saga';
import fetchReposSaga from '../sagas/fetchRepos';

const sagaMiddleware = createSagaMiddleware();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    }
}

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fetchReposSaga)

export default store;