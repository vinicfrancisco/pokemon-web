import React, { useEffect } from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Creators as PokemonsActions } from '../../store/ducks/pokemons';
import { Container, Pokemon, Attacks, Damage, Types } from './styles';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons.selected);

  useEffect(() => {
    dispatch(PokemonsActions.getPokemon(id));
  }, [id]);

  return (
    <Container>
      <header>
        <h1>Pokemon Web</h1>
      </header>

      <section>
        <header>
          <div>
            <Link to="/">
              <FiArrowLeft size={30} />
            </Link>

            <h2>Detalhes do Pokemon</h2>
          </div>

          <Link to={`/pokemon/${id}/edit`}>
            <FiEdit size={20} />
            <h2>Editar</h2>
          </Link>
        </header>

        <Pokemon>
          <img alt={pokemon?.name || ''} src={pokemon?.image || ''} />

          <div>
            <h3>{pokemon?.name || ''}</h3>

            <Types>
              {pokemon?.types?.map((type) => (
                <span key={type}>{type}</span>
              ))}
            </Types>

            <Attacks>
              <h4>Ataques Rápidos:</h4>

              {pokemon?.attacks?.fast.map((attack) => (
                <div key={attack.name}>
                  <div>
                    <h5>{attack.name}</h5>

                    <span>{`Tipo: ${attack.type}`}</span>
                  </div>

                  <Damage>{attack.damage}</Damage>
                </div>
              ))}
            </Attacks>

            <Attacks>
              <h4>Ataques Especiais:</h4>

              {pokemon?.attacks?.special.map((attack) => (
                <div key={attack.name}>
                  <div>
                    <h5>{attack.name}</h5>

                    <span>{`Tipo: ${attack.type}`}</span>
                  </div>

                  <Damage>{attack.damage}</Damage>
                </div>
              ))}
            </Attacks>
          </div>
        </Pokemon>
      </section>
    </Container>
  );
}
