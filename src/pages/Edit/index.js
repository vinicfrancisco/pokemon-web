import React, { useEffect, useCallback, useRef, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Form } from '@unform/web';
import { uuid } from 'uuidv4';

import { Creators as PokemonsActions } from '~/store/ducks/pokemons';

import Checkbox from '~/components/Checkbox';
import Field from '~/components/Field';
import Input from '~/components/Input';
import Label from '~/components/Label';

import FastAttacks from './components/FastAttacks';
import SpecialAttacks from './components/SpecialAttacks';
import { Container, Content, Save } from './styles';
import types from './types';

export default function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemons.selected);

  const [fastAttacks, setFastAttacks] = useState([]);
  const [specialAttacks, setSpecialAttacks] = useState([]);

  const handleAddFastAttack = useCallback(() => {
    setFastAttacks([
      ...fastAttacks,
      {
        id: uuid(),
        name: '',
        type: '',
        damage: '',
      },
    ]);
  }, [fastAttacks]);

  const handleAddSpecialAttack = useCallback(() => {
    setSpecialAttacks([
      ...specialAttacks,
      {
        id: uuid(),
        name: '',
        type: '',
        damage: '',
      },
    ]);
  }, [specialAttacks]);

  const handleRemoveFastAttack = useCallback(
    (attackId) => {
      setFastAttacks(fastAttacks.filter((attack) => attack.id !== attackId));
    },
    [fastAttacks]
  );

  const handleRemoveSpecialAttack = useCallback(
    (attackId) => {
      setSpecialAttacks(
        specialAttacks.filter((attack) => attack.id !== attackId)
      );
    },
    [specialAttacks]
  );

  const handleChangeFastAttack = useCallback(
    (attackId, name, value) => {
      setFastAttacks(
        fastAttacks.map((attack) => {
          if (attack.id === attackId) {
            return {
              ...attack,
              [name]: value,
            };
          }
          return attack;
        })
      );
    },
    [fastAttacks]
  );

  const handleChangeSpecialAttack = useCallback(
    (attackId, name, value) => {
      setSpecialAttacks(
        specialAttacks.map((attack) => {
          if (attack.id === attackId) {
            return {
              ...attack,
              [name]: value,
            };
          }
          return attack;
        })
      );
    },
    [specialAttacks]
  );

  const handleSubmit = useCallback(
    (data) => {
      const formattedData = {
        ...pokemon,
        name: data.name,
        types: data.types,
        attacks: {
          fast: fastAttacks.map((attack) => ({
            name: attack.name,
            type: attack.type,
            damage: attack.damage,
          })),
          special: specialAttacks.map((attack) => ({
            name: attack.name,
            type: attack.type,
            damage: attack.damage,
          })),
        },
      };

      dispatch(PokemonsActions.editPokemon(formattedData));
      history.push(`/pokemon/${id}`);
    },
    [pokemon, fastAttacks, specialAttacks]
  );

  useEffect(() => {
    dispatch(PokemonsActions.getPokemon(id));
  }, [id]);

  useEffect(() => {
    if (pokemon) {
      formRef.current.setData({
        name: pokemon.name,
        types: pokemon.types,
      });

      setFastAttacks(
        pokemon.attacks.fast.map((attack) => ({
          id: uuid(),
          ...attack,
        }))
      );
      setSpecialAttacks(
        pokemon.attacks.special.map((attack) => ({
          id: uuid(),
          ...attack,
        }))
      );
    }
  }, [pokemon]);

  return (
    <Container>
      <header>
        <h1>Pokemon Web</h1>
      </header>

      <section>
        <header>
          <div>
            <Link to={`/pokemon/${id}`}>
              <FiArrowLeft size={30} />
            </Link>

            <h2>Editar Pokemon</h2>
          </div>
        </header>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Field>
              <Label>Nome</Label>
              <Input name="name" placeholder="Ex: Pikachu" />
            </Field>

            <Field>
              <Label>Tipos</Label>
              <Checkbox name="types" options={types} />
            </Field>

            <FastAttacks
              fastAttacks={fastAttacks}
              handleAddFastAttack={handleAddFastAttack}
              handleRemoveFastAttack={handleRemoveFastAttack}
              handleChangeFastAttack={handleChangeFastAttack}
            />

            <SpecialAttacks
              specialAttacks={specialAttacks}
              handleAddSpecialAttack={handleAddSpecialAttack}
              handleRemoveSpecialAttack={handleRemoveSpecialAttack}
              handleChangeSpecialAttack={handleChangeSpecialAttack}
            />

            <Save type="submit">Salvar</Save>
          </Form>
        </Content>
      </section>
    </Container>
  );
}
