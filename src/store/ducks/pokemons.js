export const Types = {
  GET_POKEMONS_REQUEST: 'pokemons/GET_POKEMONS_REQUEST',
  GET_POKEMONS_SUCCESS: 'pokemons/GET_POKEMONS_SUCCESS',
  GET_POKEMONS_FAILURE: 'pokemons/GET_POKEMONS_FAILURE',

  GET_POKEMON: 'pokemons/GET_POKEMON',

  EDIT_POKEMON: 'pokemons/EDIT_POKEMON',
};

const initialState = {
  data: [],
  selected: null,
  loading: false,
};

export default function pokemons(state = initialState, action) {
  switch (action.type) {
    case Types.GET_POKEMONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_POKEMONS_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case Types.GET_POKEMONS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
      };
    case Types.GET_POKEMON:
      return {
        ...state,
        selected: state.data.find(
          (pokemon) => pokemon.id === action.payload.id
        ),
        loading: false,
      };
    case Types.EDIT_POKEMON:
      return {
        ...state,
        data: state.data.map((pokemon) => {
          if (pokemon.id === action.payload.data.id) {
            return action.payload.data;
          }

          return pokemon;
        }),
        selected: action.payload.data,
      };

    default:
      return state;
  }
}

export const Creators = {
  getPokemonsRequest: () => ({
    type: Types.GET_POKEMONS_REQUEST,
  }),

  getPokemonsSuccess: (data) => ({
    type: Types.GET_POKEMONS_SUCCESS,
    payload: { data },
  }),

  getPokemonsFailure: () => ({
    type: Types.GET_POKEMONS_FAILURE,
  }),

  getPokemon: (id) => ({
    type: Types.GET_POKEMON,
    payload: { id },
  }),

  editPokemon: (data) => ({
    type: Types.EDIT_POKEMON,
    payload: { data },
  }),
};
