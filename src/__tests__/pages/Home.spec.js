import React from 'react';
import * as redux from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import Home from '../../pages/Home';

const data = [
  {
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
  },
  {
    id: 'UG9rZW1vbjowMDI=',
    name: 'Ivysaur',
    types: ['Grass', 'Poison'],
    image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
    attacks: {
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
    },
  },
  {
    id: 'UG9rZW1vbjowMDM=',
    name: 'Venusaur',
    types: ['Grass', 'Poison'],
    image: 'https://img.pokemondb.net/artwork/venusaur.jpg',
    attacks: {
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
    },
  },
];

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }) => children,
  };
});

describe('Home page', () => {
  it('should be able to list pokemons', () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ data, loading: false });

    const { getByText } = render(<Home />);

    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByText('Ivysaur')).toBeTruthy();
    expect(getByText('Venusaur')).toBeTruthy();
  });

  it('should be able to show placeholder when loading pokemons', () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ data: [], loading: true });

    const { getByTestId } = render(<Home />);

    expect(getByTestId('placeholder-container-1')).toBeTruthy();
  });

  it('should be able to search pokemon by name', () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ data, loading: false });

    const { getByPlaceholderText, getByText } = render(<Home />);

    const searchInput = getByPlaceholderText('Buscar pelo nome');

    fireEvent.focus(searchInput);
    fireEvent.change(searchInput, {
      target: { value: 'Bulbasaur' },
    });
    fireEvent.blur(searchInput);

    expect(getByText('Bulbasaur')).toBeTruthy();
  });

  it('should be able to list all pokemons when clean the search input', () => {
    const useSelector = jest.spyOn(redux, 'useSelector');
    const useDispatch = jest.spyOn(redux, 'useDispatch');

    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({ data, loading: false });

    const { getByPlaceholderText, getByText } = render(<Home />);

    const searchInput = getByPlaceholderText('Buscar pelo nome');

    fireEvent.focus(searchInput);
    fireEvent.change(searchInput, {
      target: { value: 'Bulbasaur' },
    });
    fireEvent.change(searchInput, {
      target: { value: '' },
    });
    fireEvent.blur(searchInput);

    expect(getByText('Bulbasaur')).toBeTruthy();
    expect(getByText('Ivysaur')).toBeTruthy();
    expect(getByText('Venusaur')).toBeTruthy();
  });
});
