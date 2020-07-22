import React from 'react';
import { FiArrowLeft, FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Pokemon, Attacks, Damage } from './styles';

export default function Detail() {
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

          <Link to="/pokemon/1/edit">
            <FiEdit size={20} />
            <h2>Editar</h2>
          </Link>
        </header>

        <Pokemon>
          <img
            alt="Pikachu"
            src="data:image/png;base64,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"
          />

          <div>
            <h3>Pikachu</h3>

            <span>Tipos: Elétrico, Terra</span>

            <Attacks>
              <h4>Ataques Rápidos:</h4>

              <div>
                <div>
                  <h5>Tackle</h5>

                  <span>Tipo: Físcio</span>
                </div>

                <Damage>50</Damage>
              </div>

              <div>
                <div>
                  <h5>Lighting</h5>
                  <span>Tipo: Físcio</span>
                </div>

                <Damage>50</Damage>
              </div>
            </Attacks>

            <Attacks>
              <h4>Ataques Especiais:</h4>

              <div>
                <div>
                  <h5>Tackle</h5>
                  <span>Tipo: Físcio</span>
                </div>

                <Damage>50</Damage>
              </div>

              <div>
                <div>
                  <h5>Lighting</h5>
                  <span>Tipo: Físcio</span>
                </div>

                <Damage>50</Damage>
              </div>
            </Attacks>
          </div>
        </Pokemon>
      </section>
    </Container>
  );
}