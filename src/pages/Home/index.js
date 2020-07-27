import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as PokemonsActions } from '../../store/ducks/pokemons';
import PokemonPlaceholder from './components/PokemonPlaceholder';
import { Container, PokemonCard, Search, Types } from './styles';

const placeholders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Home() {
  const dispatch = useDispatch();
  const { data: pokemons, loading } = useSelector((state) => state.pokemons);

  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = useCallback(
    (e) => {
      if (e.target.value !== '') {
        setData(
          pokemons.filter(({ name }) =>
            name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      } else {
        setData(pokemons);
      }
    },
    [pokemons]
  );

  useEffect(() => {
    if (!pokemons.length) {
      dispatch(PokemonsActions.getPokemonsRequest());
    }

    setData(pokemons);
  }, [pokemons]);

  return (
    <Container>
      <header>
        <h1>Pokemon Web</h1>
      </header>

      <section>
        <header>
          <h2>Esses são seus pokemons</h2>

          <Search isFocused={isFocused}>
            <FiSearch size={15} />

            <input
              placeholder="Buscar pelo nome"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={handleSearch}
            />
          </Search>
        </header>

        <div>
          {loading ? (
            <>
              {placeholders.map((pokemon) => (
                <PokemonPlaceholder key={pokemon} id={pokemon} />
              ))}
            </>
          ) : (
            <>
              {data.map((pokemon) => (
                <PokemonCard key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                  <img alt={pokemon.name} src={pokemon.image} />

                  <div>
                    <h3>{pokemon.name}</h3>

                    <Types>
                      {pokemon.types.map((type) => (
                        <span key={type}>{type}</span>
                      ))}
                    </Types>
                  </div>
                </PokemonCard>
              ))}
            </>
          )}
        </div>
      </section>
    </Container>
  );
}
