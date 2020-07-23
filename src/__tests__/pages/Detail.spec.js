import React from 'react';
import * as redux from 'react-redux';

import { render } from '@testing-library/react';

import Detail from '../../pages/Detail';

const selected = {
  id: 'UG9rZW1vbjowMDE=',
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

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
    useParams: () => ({ id: 'UG9rZW1vbjowMDE' }),
  };
});

describe('Detail page', () => {
  it("should be able to show pokemon's details", async () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue(selected);

    const { getByText, getByAltText } = render(<Detail />);

    // Name
    expect(getByText('Bulbasaur')).toBeTruthy();

    // Types
    expect(getByText('Grass')).toBeTruthy();
    expect(getByText('Poison')).toBeTruthy();

    // Image
    expect(getByAltText('Bulbasaur')).toBeTruthy();

    // Attack
    expect(getByText('Tackle')).toBeTruthy();
    expect(getByText('Tipo: Normal')).toBeTruthy();
    expect(getByText('12')).toBeTruthy();
  });
});
