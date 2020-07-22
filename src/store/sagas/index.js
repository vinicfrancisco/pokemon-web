import { all } from 'redux-saga/effects';

import sagaPokemons from './pokemons';

export default function* rootSaga() {
  return yield all([sagaPokemons()]);
}
