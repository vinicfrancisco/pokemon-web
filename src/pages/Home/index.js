import React, { useState, useEffect, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as PokemonsActions } from '~/store/ducks/pokemons';

import { Container, PokemonCard, Search } from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.data);

  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = useCallback(
    (e) => {
      if (e.target.value !== '') {
        setData(
          pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(e.target.value.toLowerCase())
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
          {data.map((pokemon) => (
            <PokemonCard key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <img alt={pokemon.name} src={pokemon.image} />

              <div>
                <h3>{pokemon.name}</h3>

                <span>{`Tipos: ${pokemon.types.join(', ')}`}</span>
              </div>
            </PokemonCard>
          ))}
        </div>
      </section>
    </Container>
  );
}
