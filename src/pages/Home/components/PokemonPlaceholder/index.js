import React from 'react';

import { Container, Image, Info, Name, Types } from './styles';

export default function PokemonPlaceholder() {
  return (
    <Container>
      <Image />

      <Info>
        <Name />

        <Types />
      </Info>
    </Container>
  );
}
