import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import createRootReducer from '~/store/ducks';
import sagas from '~/store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createRootReducer(), applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;
