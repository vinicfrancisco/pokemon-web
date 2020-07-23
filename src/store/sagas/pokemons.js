import { gql } from '@apollo/client';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
  Creators as PokemonsActions,
  Types as PokemonsTypes,
} from '~/store/ducks/pokemons';

import api from '~/services/api';

function* getPokemons() {
  try {
    const response = yield call(api.query, {
      query: gql`
        query Query {
          pokemons(first: 151) {
            id
            name
            types
            image
            attacks {
              special {
                name
                type
                damage
              }
              fast {
                name
                type
                damage
              }
            }
          }
        }
      `,
    });

    yield put(PokemonsActions.getPokemonsSuccess(response.data.pokemons));
  } catch (error) {
    yield put(PokemonsActions.getPokemonsFailure());
  }
}

export default function* saga() {
  yield takeLatest(PokemonsTypes.GET_POKEMONS_REQUEST, getPokemons);
}
