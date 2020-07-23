import React from 'react';
import * as redux from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Edit from '../../pages/Edit';

const selected = {
  id: 'UG9rZW1vbjowMDE',
  name: 'Bulbasaur',
  types: ['Grass', 'Poison'],
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  attacks: {
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
  },
};

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    useParams: () => ({ id: 'UG9rZW1vbjowMDE' }),
    Link: ({ children }) => children,
  };
});

describe('Edit page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able to edit pokemon data', () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue(selected);

    const { getByText, getByTestId, getByPlaceholderText } = render(<Edit />);

    // Change Pokemon name
    const inputName = getByPlaceholderText('Ex: Pikachu');

    fireEvent.focus(inputName);
    fireEvent.change(inputName, {
      target: {
        value: 'Mewtwo',
      },
    });
    fireEvent.blur(inputName);

    expect(inputName.value).toBe('Mewtwo');

    // Add Fire type to pokemon
    const fireType = getByTestId('checkbox-types-Fire');

    fireEvent.click(fireType);

    // Add new fast attack
    const addFastAttackButton = getByTestId('add-fast-attack');

    fireEvent.click(addFastAttackButton);

    const inputFastAttackName = getByTestId('fast-attack-name-2');
    const inputFastAttackType = getByTestId('fast-attack-type-2');
    const inputFastAttackDamage = getByTestId('fast-attack-damage-2');

    fireEvent.change(inputFastAttackName, {
      target: {
        value: 'Fireball',
      },
    });
    fireEvent.change(inputFastAttackType, {
      target: {
        value: 'Fire',
      },
    });
    fireEvent.change(inputFastAttackDamage, {
      target: { value: '50' },
    });

    expect(inputFastAttackName.value).toBe('Fireball');
    expect(inputFastAttackType.value).toBe('Fire');
    expect(inputFastAttackDamage.value).toBe('50');

    // Remove first fast attack
    const removeFastAttackButton = getByTestId('remove-fast-attack-1');

    fireEvent.click(removeFastAttackButton);

    // Add new special attack
    const addSpecialAttackButton = getByTestId('add-special-attack');

    fireEvent.click(addSpecialAttackButton);

    const inputSpecialAttackName = getByTestId('special-attack-name-2');
    const inputSpecialAttackType = getByTestId('special-attack-type-2');
    const inputSpecialAttackDamage = getByTestId('special-attack-damage-2');

    fireEvent.change(inputSpecialAttackName, {
      target: {
        value: 'Super Fireball',
      },
    });
    fireEvent.change(inputSpecialAttackType, {
      target: {
        value: 'Fire',
      },
    });
    fireEvent.change(inputSpecialAttackDamage, {
      target: { value: '150' },
    });

    expect(inputSpecialAttackName.value).toBe('Super Fireball');
    expect(inputSpecialAttackType.value).toBe('Fire');
    expect(inputSpecialAttackDamage.value).toBe('150');

    // Remove first special attack
    const removeSpecialAttackButton = getByTestId('remove-special-attack-1');

    fireEvent.click(removeSpecialAttackButton);

    const saveButton = getByText('Salvar');

    fireEvent.click(saveButton);

    expect(mockedHistoryPush).toHaveBeenCalledWith(`/pokemon/${selected.id}`);
  });
});
