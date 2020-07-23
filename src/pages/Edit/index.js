import React, { useEffect, useCallback, useRef, useState } from 'react';
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

import { Form } from '@unform/web';
import { uuid } from 'uuidv4';

import Checkbox from '../../components/Checkbox';
import Field from '../../components/Field';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { Creators as PokemonsActions } from '../../store/ducks/pokemons';
import {
  Container,
  Content,
  AttackHeader,
  AttackContaier,
  Save,
} from './styles';

const types = [
  'Bug',
  'Dark',
  'Dragon',
  'Eletric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
];

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

            <Field>
              <AttackHeader>
                <Label>Ataques Rápidos</Label>

                <button
                  data-testid="add-fast-attack"
                  type="button"
                  onClick={handleAddFastAttack}
                >
                  <FiPlus size={20} />
                </button>
              </AttackHeader>

              {fastAttacks.map((attack, index) => (
                <AttackContaier key={attack.id}>
                  <button
                    data-testid={`remove-fast-attack-${index}`}
                    type="button"
                    onClick={() => handleRemoveFastAttack(attack.id)}
                  >
                    <FiX size={15} />
                  </button>

                  <div>
                    <Field>
                      <Label>Nome:</Label>
                      <Input
                        blackBorder
                        data-testid={`fast-attack-name-${index}`}
                        name={`attack_name-${attack.id}`}
                        placeholder="Ex: Tackle"
                        value={attack.name}
                        onChange={(e) =>
                          handleChangeFastAttack(
                            attack.id,
                            'name',
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field>
                      <Label>Tipo:</Label>
                      <Input
                        blackBorder
                        data-testid={`fast-attack-type-${index}`}
                        name={`attack_type-${attack.id}`}
                        placeholder="Ex: Fire"
                        value={attack.type}
                        onChange={(e) =>
                          handleChangeFastAttack(
                            attack.id,
                            'type',
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field>
                      <Label>Dano:</Label>
                      <Input
                        blackBorder
                        data-testid={`fast-attack-damage-${index}`}
                        name={`attack_damage-${attack.id}`}
                        placeholder="Ex: 50"
                        value={attack.damage}
                        onChange={(e) =>
                          handleChangeFastAttack(
                            attack.id,
                            'damage',
                            e.target.value
                          )
                        }
                      />
                    </Field>
                  </div>
                </AttackContaier>
              ))}
            </Field>

            <Field>
              <AttackHeader>
                <Label>Ataques Especiais</Label>
                <button
                  data-testid="add-special-attack"
                  type="button"
                  onClick={handleAddSpecialAttack}
                >
                  <FiPlus size={20} />
                </button>
              </AttackHeader>

              {specialAttacks.map((attack, index) => (
                <AttackContaier key={attack.id}>
                  <button
                    data-testid={`remove-special-attack-${index}`}
                    type="button"
                    onClick={() => handleRemoveSpecialAttack(attack.id)}
                  >
                    <FiX size={15} />
                  </button>

                  <div>
                    <Field>
                      <Label>Nome:</Label>
                      <Input
                        blackBorder
                        data-testid={`special-attack-name-${index}`}
                        name={`special_attack_name-${attack.id}`}
                        placeholder="Ex: Tackle"
                        value={attack.name}
                        onChange={(e) =>
                          handleChangeSpecialAttack(
                            attack.id,
                            'name',
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field>
                      <Label>Tipo:</Label>
                      <Input
                        blackBorder
                        data-testid={`special-attack-type-${index}`}
                        name={`special_attack_type-${attack.id}`}
                        placeholder="Ex: Fire"
                        value={attack.type}
                        onChange={(e) =>
                          handleChangeSpecialAttack(
                            attack.id,
                            'type',
                            e.target.value
                          )
                        }
                      />
                    </Field>

                    <Field>
                      <Label>Dano:</Label>
                      <Input
                        blackBorder
                        data-testid={`special-attack-damage-${index}`}
                        name={`special_attack_damage-${attack.id}`}
                        placeholder="Ex: 50"
                        value={attack.damage}
                        onChange={(e) =>
                          handleChangeSpecialAttack(
                            attack.id,
                            'damage',
                            e.target.value
                          )
                        }
                      />
                    </Field>
                  </div>
                </AttackContaier>
              ))}
            </Field>

            <Save type="submit">Salvar</Save>
          </Form>
        </Content>
      </section>
    </Container>
  );
}
