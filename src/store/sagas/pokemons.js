import { put, takeLatest } from 'redux-saga/effects';

import {
  Creators as PokemonsActions,
  Types as PokemonsTypes,
} from '~/store/ducks/pokemons';

const data = [
  {
    id: '001',
    name: 'Bulbasaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    weight: {
      minimum: '6.04kg',
      maximum: '7.76kg',
    },
    height: {
      minimum: '0.61m',
      maximum: '0.79m',
    },
    fleeRate: 0.1,
    evolutionRequirements: {
      amount: 25,
      name: 'Bulbasaur candies',
    },
    evolutions: [
      {
        id: 2,
        name: 'Ivysaur',
      },
      {
        id: 3,
        name: 'Venusaur',
      },
    ],
    maxCP: 951,
    maxHP: 1071,
    attacks: {
      fast: [
        {
          name: 'Tackle',
          type: 'Normal',
          damage: 12,
        },
        {
          name: 'Vine Whip',
          type: 'Grass',
          damage: 7,
        },
      ],
      special: [
        {
          name: 'Power Whip',
          type: 'Grass',
          damage: 70,
        },
        {
          name: 'Seed Bomb',
          type: 'Grass',
          damage: 40,
        },
        {
          name: 'Sludge Bomb',
          type: 'Poison',
          damage: 55,
        },
      ],
    },
  },
  {
    id: '002',
    name: 'Ivysaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    weight: {
      minimum: '11.38kg',
      maximum: '14.63kg',
    },
    height: {
      minimum: '0.88m',
      maximum: '1.13m',
    },
    fleeRate: 0.07,
    'Previous evolution(s)': [
      {
        id: 1,
        name: 'Bulbasaur',
      },
    ],
    evolutionRequirements: {
      amount: 100,
      name: 'Bulbasaur candies',
    },
    evolutions: [
      {
        id: 3,
        name: 'Venusaur',
      },
    ],
    maxCP: 1483,
    maxHP: 1632,
    attacks: {
      fast: [
        {
          name: 'Razor Leaf',
          type: 'Grass',
          damage: 15,
        },
        {
          name: 'Vine Whip',
          type: 'Grass',
          damage: 7,
        },
      ],
      special: [
        {
          name: 'Power Whip',
          type: 'Grass',
          damage: 70,
        },
        {
          name: 'Sludge Bomb',
          type: 'Poison',
          damage: 55,
        },
        {
          name: 'Solar Beam',
          type: 'Grass',
          damage: 120,
        },
      ],
    },
  },
  {
    id: '003',
    name: 'Venusaur',
    classification: 'Seed Pokémon',
    types: ['Grass', 'Poison'],
    resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
    weight: {
      minimum: '87.5kg',
      maximum: '112.5kg',
    },
    height: {
      minimum: '1.75m',
      maximum: '2.25m',
    },
    fleeRate: 0.05,
    'Previous evolution(s)': [
      {
        id: 1,
        name: 'Bulbasaur',
      },
      {
        id: 2,
        name: 'Ivysaur',
      },
    ],
    maxCP: 2392,
    maxHP: 2580,
    attacks: {
      fast: [
        {
          name: 'Razor Leaf',
          type: 'Grass',
          damage: 15,
        },
        {
          name: 'Vine Whip',
          type: 'Grass',
          damage: 7,
        },
      ],
      special: [
        {
          name: 'Petal Blizzard',
          type: 'Grass',
          damage: 65,
        },
        {
          name: 'Sludge Bomb',
          type: 'Poison',
          damage: 55,
        },
        {
          name: 'Solar Beam',
          type: 'Grass',
          damage: 120,
        },
      ],
    },
  },
];

function* getPokemons() {
  try {
    yield put(PokemonsActions.getPokemonsSuccess(data));
  } catch (error) {
    yield put(PokemonsActions.getPokemonsFailure());
  }
}

export default function* saga() {
  yield takeLatest(PokemonsTypes.GET_POKEMONS_REQUEST, getPokemons);
}
