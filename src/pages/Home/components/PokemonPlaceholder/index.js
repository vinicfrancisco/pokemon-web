import React from 'react';

import { Container, Image, Info, Name, Types } from './styles';

export default function PokemonPlaceholder({ id }) {
  return (
    <Container data-testid={`placeholder-container-${id}`}>
      <Image />

      <Info>
        <Name />

        <Types />
      </Info>
    </Container>
  );
}
