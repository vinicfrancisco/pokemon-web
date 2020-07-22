import React, { useCallback } from 'react';
import { FiArrowLeft, FiPlus, FiX } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import { Form } from '@unform/web';

import Checkbox from '~/components/Checkbox';
import Field from '~/components/Field';
import Input from '~/components/Input';
import Label from '~/components/Label';

import {
  Container,
  Content,
  AttackHeader,
  AttackContaier,
  Save,
} from './styles';

export default function Edit() {
  const history = useHistory();

  const handleSubmit = useCallback((data) => {
    console.log(data);

    history.push('/pokemon/id');
  }, []);

  return (
    <Container>
      <header>
        <h1>Pokemon Web</h1>
      </header>

      <section>
        <header>
          <div>
            <Link to="/pokemon/1">
              <FiArrowLeft size={30} />
            </Link>

            <h2>Editar Pokemon</h2>
          </div>
        </header>

        <Content>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>Nome</Label>
              <Input name="name" placeholder="Ex: Pikachu" />
            </Field>

            <Field>
              <Label>Tipos</Label>
              <Checkbox
                name="types"
                options={[
                  { label: 'Grama', value: 'Grass' },
                  { label: 'Fogo', value: 'Fire' },
                ]}
              />
            </Field>

            <Field>
              <AttackHeader>
                <Label>Ataques Rápidos</Label>

                <button type="button" onClick={() => {}}>
                  <FiPlus size={20} />
                </button>
              </AttackHeader>

              <AttackContaier>
                <button type="button" onClick={() => {}}>
                  <FiX size={15} />
                </button>

                <div>
                  <Field>
                    <Label>Nome:</Label>
                    <Input
                      blackBorder
                      name="attack_name"
                      placeholder="Ex: Tackle"
                    />
                  </Field>

                  <Field>
                    <Label>Tipo:</Label>
                    <Input
                      blackBorder
                      name="attack_type"
                      placeholder="Ex: Fire"
                    />
                  </Field>

                  <Field>
                    <Label>Dano:</Label>
                    <Input
                      blackBorder
                      name="attack_damage"
                      placeholder="Ex: 50"
                    />
                  </Field>
                </div>
              </AttackContaier>
            </Field>

            <Field>
              <Label>Ataques Especiais</Label>

              <AttackContaier>
                <button type="button" onClick={() => {}}>
                  <FiX size={15} />
                </button>

                <div>
                  <Field>
                    <Label>Nome:</Label>
                    <Input
                      blackBorder
                      name="attack_name"
                      placeholder="Ex: Tackle"
                    />
                  </Field>

                  <Field>
                    <Label>Tipo:</Label>
                    <Input
                      blackBorder
                      name="attack_type"
                      placeholder="Ex: Fire"
                    />
                  </Field>

                  <Field>
                    <Label>Dano:</Label>
                    <Input
                      blackBorder
                      name="attack_damage"
                      placeholder="Ex: 50"
                    />
                  </Field>
                </div>
              </AttackContaier>
            </Field>

            <Save type="submit">Salvar</Save>
          </Form>
        </Content>
      </section>
    </Container>
  );
}
